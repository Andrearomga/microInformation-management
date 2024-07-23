import { Request, Response } from 'express';
import { MedicalAppointmentService } from '../../../application/services/MedicalAppointmentService';
import MedicalAppointment from '../../../domain/entities/MedicalAppointment';

export class MedicalAppointmentController {

    private MedicalAppointmentService: MedicalAppointmentService;


    constructor(babyService: MedicalAppointmentService) {
        this.MedicalAppointmentService = babyService;
    }

    async save(req: Request, res: Response): Promise<void> {
        let data: MedicalAppointment = req.body.medicalAppointment ?? { IdMedicalAppointment: 0, IdBaby: 0, title: "", date: "", description: "", hour: "" };
        const baby: MedicalAppointment = await this.MedicalAppointmentService.save(data);

        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: baby
        });
    }



    async list(req: Request, res: Response): Promise<void> {
        
        let IdBaby: number = isNaN(Number(req.params.IdBaby)) ? -100 : Number(req.params.IdBaby);

        const medicalAppointment: MedicalAppointment[] = await this.MedicalAppointmentService.list(IdBaby);

        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: medicalAppointment
        });
    }


}