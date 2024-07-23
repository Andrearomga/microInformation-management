// src/domain/repositories/UserRepository.ts
import Feeding from '../entities/Feeding';

export interface FeedingRepository {
    save(feeding: Feeding): Promise<Feeding>;
    list(IdBaby: number): Promise<Feeding[]>;
    delete(IdFeeding: number): Promise<void>;
}
