import { Router, Request, Response, NextFunction } from 'express';
import { PediatricianService } from '../application/services/PediatricianService';
import { TypeORMPediatricianRepository } from '../infrastructure/adapters/repositories/TypeORMPediatricianRepository';
import {  PediatricianController} from '../infrastructure/adapters/controllers/PediatricianController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const vaccineGroupRoutes = Router();

const vaccineGroupTypeRepository = new TypeORMPediatricianRepository();
const vaccineGroupTypeService = new PediatricianService(vaccineGroupTypeRepository);
const vaccineGroupTypeController = new PediatricianController(vaccineGroupTypeService);

vaccineGroupRoutes.get(
    '/list',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => vaccineGroupTypeController.list(req, res)
);

vaccineGroupRoutes.post(
    '/search',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => vaccineGroupTypeController.searchByName(req, res)
);


export default vaccineGroupRoutes;
