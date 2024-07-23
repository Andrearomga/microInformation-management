import { Repository } from 'typeorm';
import Dream from '../../../domain/entities/Dream';
import { DreamRepository } from '../../../domain/repositories/DreamRepository';
import DreamEntity from '../entities/DreamEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMDreamRepository implements DreamRepository {

    private repositoryDream: Repository<DreamEntity>;

    constructor() {
        this.repositoryDream = AppDataSource.getRepository(DreamEntity);
    }

    async save(data: Dream): Promise<Dream> {
        let baby: Dream = await this.repositoryDream.save(data);
        return baby
    }

    async list(IdBaby: number): Promise<Dream[]> {
        let dream: Dream[] = await this.repositoryDream.find({ where: { IdBaby } });
        return dream
    }

    async update(IdDream: number): Promise<void> {
        let dream: Dream = await this.repositoryDream.findOne({ where: { IdDream } }) ?? { IdDream: 0, finalHour: "", IdBaby: 0, initialHour: "", IsActivated: 0 };
        dream = {
            ...dream,
            IsActivated: dream.IsActivated === 1 ? 0 : 1
        }
        await this.repositoryDream.save(dream);
    }

    async delete(IdDream: number): Promise<void> {
        await this.repositoryDream.delete({ IdDream });
    }

}