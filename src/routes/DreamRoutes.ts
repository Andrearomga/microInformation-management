import { Router, Request, Response, NextFunction } from 'express';
import { DreamService } from '../application/services/DreamService';
import { TypeORMDreamRepository } from '../infrastructure/adapters/repositories/TypeORMDreamRepository';
import {  DreamController} from '../infrastructure/adapters/controllers/DreamController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const dreamRoutes = Router();

const dreamRepository = new TypeORMDreamRepository();
const dreamService = new DreamService(dreamRepository);
const dreamController = new DreamController(dreamService);

dreamRoutes.get(
    '/list/:IdBaby',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => dreamController.list(req, res)
);

dreamRoutes.post(
    '/save',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => dreamController.save(req, res)
);

dreamRoutes.put(
    '/update/:IdDream',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => dreamController.update(req, res)
);

dreamRoutes.delete(
    '/delete/:IdDream',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => dreamController.delete(req, res)
);


export default dreamRoutes;
