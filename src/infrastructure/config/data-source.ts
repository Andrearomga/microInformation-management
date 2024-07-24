// src/infrastructure/config/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import VaccineGroup from '../adapters/entities/VaccineGroupEntity';
import VaccineBaby from '../adapters/entities/VaccineBabyEntity';
import Baby from '../adapters/entities/BabyEntity';
import Pediatrician from '../adapters/entities/PediatricianEntity';
import MedicalAppointment from '../adapters/entities/MedicalAppointmentEntity';
import Dream from '../adapters/entities/DreamEntity';
import Feeding from '../adapters/entities/FeedingEntity';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "database-2.crawrvlmcbr6.us-east-1.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "12345678",
    database: "db-baby-link-information-management",
    entities: ["dist/domain/entities/*.js", VaccineGroup, VaccineBaby, Baby, Pediatrician, MedicalAppointment, Dream, Feeding],
    synchronize: true,
    logging: false,
    // migrations: [],
    // subscribers: []
});
