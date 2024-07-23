
// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_medical_appointment")
class MedicalAppointmentEntity {

    @PrimaryGeneratedColumn()
    IdMedicalAppointment!: number;

    @Column()
    IdBaby!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ type: "time" })
    hour!: string;

    @Column({ type: "date" })
    date!: string;

}

export default MedicalAppointmentEntity;
