import { Router, Request, Response, NextFunction } from 'express';
import { MedicalAppointmentService } from '../application/services/MedicalAppointmentService';
import { TypeORMMedicalAppointmentRepository } from '../infrastructure/adapters/repositories/TypeORMMedicalAppointmentRepository';
import {  MedicalAppointmentController} from '../infrastructure/adapters/controllers/MedicalAppointmentController';
import AuthMiddleware from '../infrastructure/middleware/AuthMiddleware';


const authMiddleware: AuthMiddleware = new AuthMiddleware();
const { validateUserToken } = authMiddleware;

const vaccineGroupRoutes = Router();

const medicalAppointmentRepository = new TypeORMMedicalAppointmentRepository();
const medicalAppointmentService = new MedicalAppointmentService(medicalAppointmentRepository);
const medicalAppointmentController = new MedicalAppointmentController(medicalAppointmentService);

vaccineGroupRoutes.get(
    '/list/:IdBaby',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => medicalAppointmentController.list(req, res)
);

vaccineGroupRoutes.post(
    '/save',
    (req: Request, res: Response, next: NextFunction) => validateUserToken(req, res, next),
    (req: Request, res: Response) => medicalAppointmentController.save(req, res)
);


export default vaccineGroupRoutes;
