
// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_vaccine_baby")
class VaccineBabyEntity {

    @PrimaryGeneratedColumn()
    IdVaccineBaby!: number;

    @Column()
    IdVaccineGroup!: number;

    @Column()
    IdBaby!: number;

    @Column()
    description!: string;

    @Column()
    itIsApplied!: number;

}

export default VaccineBabyEntity;
