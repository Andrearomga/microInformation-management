import MedicalAppointment from '../../domain/entities/MedicalAppointment';
import { MedicalAppointmentRepository } from '../../domain/repositories/MedicalAppointmentRepository';

export class MedicalAppointmentService {

    constructor(private medicalAppointmentRepository: MedicalAppointmentRepository) { }

    async save(data: MedicalAppointment): Promise<MedicalAppointment> {
        const medicalAppointment: MedicalAppointment = await this.medicalAppointmentRepository.save(data);
        return medicalAppointment;
    }

    async list(IdBaby: number): Promise<MedicalAppointment[]> {
        let medicalAppointment: MedicalAppointment[] = await this.medicalAppointmentRepository.list(IdBaby);
        return medicalAppointment;
    }

}
