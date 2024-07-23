import VaccineBaby from '../../domain/entities/VaccineBaby';
import VaccineGroup from '../../domain/entities/VaccineGroup';
import { VaccineGroupRepository } from '../../domain/repositories/VaccineGroupRepository';

export class VaccineGroupService {

    constructor(private vaccineGroupRepository: VaccineGroupRepository) { }

    async getList(): Promise<VaccineGroup[]> {
        const vaccineGroup: VaccineGroup[] = await this.vaccineGroupRepository.getList();
        return vaccineGroup;
    }

    async getListByBaby(IdBaby: number, IdVaccineGroup: number): Promise<VaccineGroup[]> {
        const vaccineGroup: VaccineGroup[] = await this.vaccineGroupRepository.getListByBay(IdBaby,IdVaccineGroup);
        return vaccineGroup;
    }

    async update(IdBaby: number, itIsApplied: number): Promise<void> {
        await this.vaccineGroupRepository.update(IdBaby, itIsApplied);
    }

    async save(vaccineBaby: VaccineBaby): Promise<void> {
        await this.vaccineGroupRepository.save(vaccineBaby);
    }

}
