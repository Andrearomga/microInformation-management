import { Router, Request, Response, NextFunction } from 'express';
import { BabyService } from '../application/services/BabyService';
import { VaccineGroupService } from '../application/services/VaccineGroupService';
import { TypeORMBabyRepository } from '../infrastructure/adapters/repositories/TypeORMBabyRepository';
import { TypeORMVaccineGroupRepository } from '../infrastructure/adapters/repositories/TypeORMVaccineGroupRepository';
import { BabyController } from '../infrastructure/adapters/controllers/BabyController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const babyRoutes = Router();

const babyTypeRepository = new TypeORMBabyRepository();
const babyTypeService = new BabyService(babyTypeRepository);

const typeORMVaccineGroupRepository = new TypeORMVaccineGroupRepository();
const vaccineGroupService = new VaccineGroupService(typeORMVaccineGroupRepository);

const babyTypeController = new BabyController(babyTypeService, vaccineGroupService);

babyRoutes.post(
    '/save',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => babyTypeController.save(req, res)
);

babyRoutes.get(
    '/get/:IdBaby',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => babyTypeController.getBabyById(req, res)
);

babyRoutes.put(
    '/update/:IdBaby',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => babyTypeController.update(req, res)
);


export default babyRoutes;
