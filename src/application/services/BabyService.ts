import Baby from '../../domain/entities/Baby';
import { BabyRepository } from '../../domain/repositories/BabyRepository';

export class BabyService {

    constructor(private vaccineGroupRepository: BabyRepository) { }

    async save(data: Baby): Promise<Baby> {
        const baby: Baby = await this.vaccineGroupRepository.save(data);
        return baby;
    }

    async getBabyById(IdBaby: number): Promise<Baby> {
        const baby: Baby = await this.vaccineGroupRepository.getBabyByID(IdBaby)
        return baby;
    }

    //implementar el metodo de actualizar con el id del bebe
    async updateBabyId(IdBaby: number, data: Baby): Promise<Baby> {
        const baby: Baby = await this.vaccineGroupRepository.updateBabyId(IdBaby, data);
        return baby;
    }

}
