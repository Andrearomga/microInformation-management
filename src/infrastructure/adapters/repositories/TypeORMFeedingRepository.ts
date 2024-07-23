import { Repository } from 'typeorm';
import Feeding from '../../../domain/entities/Feeding';
import { FeedingRepository } from '../../../domain/repositories/FeedigRepository';
import FeedingEntity from '../entities/FeedingEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMFeedingRepository implements FeedingRepository {

    private repositoryFeeding: Repository<FeedingEntity>;

    constructor() {
        this.repositoryFeeding = AppDataSource.getRepository(FeedingEntity);
    }

    async save(data: Feeding): Promise<Feeding> {
        let baby: Feeding = await this.repositoryFeeding.save(data);
        return baby
    }

    async list(IdBaby: number): Promise<Feeding[]> {
        let data: Feeding[] = await this.repositoryFeeding.find({ where: { IdBaby } });
        return data;
    }

    async delete(IdFeeding: number): Promise<void> {
        await this.repositoryFeeding.delete(IdFeeding);
    }

}