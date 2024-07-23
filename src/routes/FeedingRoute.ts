import { Router, Request, Response, NextFunction } from 'express';
import { FeedingService } from '../application/services/FeedingService';
import { TypeORMFeedingRepository } from '../infrastructure/adapters/repositories/TypeORMFeedingRepository';
import {  FeedingController} from '../infrastructure/adapters/controllers/FeedingController'
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const dreamRoutes = Router();

const feedingRepository = new TypeORMFeedingRepository();
const feedingService = new FeedingService(feedingRepository);
const feedingController = new FeedingController(feedingService);

dreamRoutes.get(
    
    '/list/:IdBaby',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => feedingController.list(req, res)
);

dreamRoutes.post(
    '/save',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => feedingController.save(req, res)
);

dreamRoutes.put(
    '/update',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => feedingController.save(req, res)
);

dreamRoutes.delete(
    '/delete/:IdFeeding',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => feedingController.delete(req, res)
);


export default dreamRoutes;
