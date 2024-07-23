// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_dream")
class DreamEntity {

    @PrimaryGeneratedColumn()
    IdDream!: number;

    @Column()
    IdBaby!: number;

    @Column({ type: 'time' })
    initialHour!: string;

    @Column({ type: 'time' })
    finalHour!: string;

    @Column()
    IsActivated!: number;

}

export default DreamEntity;
