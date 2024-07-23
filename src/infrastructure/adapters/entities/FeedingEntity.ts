// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_feeding")
class DreamEntity {

    @PrimaryGeneratedColumn()
    IdFeeding!: number;

    @Column()
    IdBaby!: number;

    @Column()
    title!: string;

    @Column({ type: 'time' })
    hour!: string;

    @Column()
    notes!: string;

}

export default DreamEntity;
