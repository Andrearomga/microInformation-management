// src/domain/repositories/UserRepository.ts
import Pediatrician from '../entities/Pediatrician';

export interface PediatricianRepository {
    list(): Promise<Pediatrician[]>;
    searchByName(fullName: string): Promise<Pediatrician[]>;
}
