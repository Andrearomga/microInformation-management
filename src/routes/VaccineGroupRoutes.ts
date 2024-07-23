import { Router, Request, Response, NextFunction } from 'express';
import { VaccineGroupService } from '../application/services/VaccineGroupService';
import { TypeORMVaccineGroupRepository } from '../infrastructure/adapters/repositories/TypeORMVaccineGroupRepository';
import { VaccineGroupController } from '../infrastructure/adapters/controllers/VaccineGroupController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const vaccineGroupRoutes = Router();

const vaccineGroupTypeRepository = new TypeORMVaccineGroupRepository();
const vaccineGroupTypeService = new VaccineGroupService(vaccineGroupTypeRepository);
const vaccineGroupTypeController = new VaccineGroupController(vaccineGroupTypeService);

vaccineGroupRoutes.get(
    '/list',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => vaccineGroupTypeController.getList(req, res)
);

vaccineGroupRoutes.get(
    '/list/by-baby/:IdBaby/:IdVaccineGroup',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => vaccineGroupTypeController.getListByBaby(req, res)
);

vaccineGroupRoutes.put(
    '/by-baby/update',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => vaccineGroupTypeController.update(req, res)
);


export default vaccineGroupRoutes;
