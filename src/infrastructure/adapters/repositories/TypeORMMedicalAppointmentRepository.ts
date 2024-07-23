import { Repository } from 'typeorm';
import MedicalAppointment from '../../../domain/entities/MedicalAppointment';
import { MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository';
import MedicalAppointmentEntity from '../entities/MedicalAppointmentEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMMedicalAppointmentRepository implements MedicalAppointmentRepository {

    private repositoryMedicalAppointment: Repository<MedicalAppointmentEntity>;

    constructor() {
        this.repositoryMedicalAppointment = AppDataSource.getRepository(MedicalAppointmentEntity);
    }

    async save(data: MedicalAppointment): Promise<MedicalAppointment> {

        let medicalAppointment: MedicalAppointment = await this.repositoryMedicalAppointment.save(data);
        return medicalAppointment
    }

    async list(IdBaby: number): Promise<MedicalAppointment[]> {
        let medicalAppointment: MedicalAppointment[] = await this.repositoryMedicalAppointment.find({ where: { IdBaby } });
        return medicalAppointment;
    }

}