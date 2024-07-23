// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_pediatrician")
class PediatricianEntity {

    @PrimaryGeneratedColumn()
    IdPediatrician!: number;

    @Column()
    fullName!: string;

    @Column({type:"time"})
    initialAttentionTime!: string;

    @Column({type:"time"})
    finalAttentionTime!: string;

    @Column()
    numberPhone!: string;

}

export default PediatricianEntity;
