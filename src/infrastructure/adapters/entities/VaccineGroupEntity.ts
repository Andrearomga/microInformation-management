// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_vaccine_group")
class VaccineGroupEntity {

    @PrimaryGeneratedColumn()
    IdVaccineGroup!: number;

    @Column()
    description!: string;

}

export default VaccineGroupEntity;
