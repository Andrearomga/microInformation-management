import Feeding from '../../domain/entities/Feeding';
import { FeedingRepository } from '../../domain/repositories/FeedigRepository';

export class FeedingService {

    constructor(private feedingRepository: FeedingRepository) { }

    async save(data: Feeding): Promise<Feeding> {        
        const feeding: Feeding = await this.feedingRepository.save(data);
        return feeding;
    }

    async list(IdBaby: number): Promise<Feeding[]> {
        const dreams: Feeding[] = await this.feedingRepository.list(IdBaby);
        return dreams;
    }

    async delete(IdDream: number): Promise<void> {
        await this.feedingRepository.delete(IdDream)
    }

}
