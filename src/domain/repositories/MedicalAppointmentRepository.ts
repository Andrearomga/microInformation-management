// src/domain/repositories/UserRepository.ts
import MedicalAppointment from '../entities/MedicalAppointment';

export interface MedicalAppointmentRepository {
    save(medicalAppointment: MedicalAppointment): Promise<MedicalAppointment>;
    list(IdBaby: number): Promise<MedicalAppointment[]>;
}
