// src/domain/repositories/UserRepository.ts
import Dream from '../entities/Dream';

export interface DreamRepository {
    save(dream: Dream): Promise<Dream>;
    list(IdBaby: number): Promise<Dream[]>;
    update(IdDream: number): Promise<void>;
    delete(IdDream: number): Promise<void>;
}
