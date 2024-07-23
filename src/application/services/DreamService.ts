import Dream from '../../domain/entities/Dream';
import { DreamRepository } from '../../domain/repositories/DreamRepository';

export class DreamService {

    constructor(private dreamRepository: DreamRepository) { }

    async save(data: Dream): Promise<Dream> {        
        const dream: Dream = await this.dreamRepository.save(data);
        return dream;
    }

    async list(IdBaby: number): Promise<Dream[]> {
        const dreams: Dream[] = await this.dreamRepository.list(IdBaby);
        return dreams;
    }

    async update(IdDream: number): Promise<void> {
        await this.dreamRepository.update(IdDream);
    }

    async delete(IdDream: number): Promise<void> {
        await this.dreamRepository.delete(IdDream)
    }

}
