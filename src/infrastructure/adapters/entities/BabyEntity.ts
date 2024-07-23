// src/infrastructure/adapters/entities/UserEntity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("lkp_baby")
class BabyEntity {

    @PrimaryGeneratedColumn()
    IdBaby!: number;

    @Column()
    IdUser!: number;

    @Column()
    userRol!: string;

    @Column()
    nameBaby!: string;

    @Column({ type: 'date' })
    birthdate!: string;

    @Column()
    gender!: number;

    @Column({type:"float"})
    weight!: number;

    @Column({type:"float"})
    height!: number;

}

export default BabyEntity;
