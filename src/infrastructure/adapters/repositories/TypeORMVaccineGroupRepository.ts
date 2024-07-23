import { Repository } from 'typeorm';
import VaccineGroup from '../../../domain/entities/VaccineGroup';
import VaccineBaby from '../../../domain/entities/VaccineBaby';
import { VaccineGroupRepository } from '../../../domain/repositories/VaccineGroupRepository';
import VaccineGroupEntity from '../entities/VaccineGroupEntity';
import VaccineBabyEntity from '../entities/VaccineBabyEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMVaccineGroupRepository implements VaccineGroupRepository {

    private repositoryVaccineGroup: Repository<VaccineGroupEntity>;
    private repositoryVaccineBaby: Repository<VaccineBabyEntity>;

    constructor() {
        this.repositoryVaccineGroup = AppDataSource.getRepository(VaccineGroupEntity);
        this.repositoryVaccineBaby = AppDataSource.getRepository(VaccineBabyEntity);
    }

    async getList(): Promise<VaccineGroup[]> {
        let vaccineGroup: VaccineGroup[] = await this.repositoryVaccineGroup.find();
        return vaccineGroup;
    }

    async getListByBay(IdBaby: number, IdVaccineGroup: number): Promise<VaccineBaby[]> {
        let vaccineGroup: VaccineBaby[] = await this.repositoryVaccineBaby.find({ where: { IdBaby, IdVaccineGroup } });
        return vaccineGroup;
    }

    async update(IdVaccineBaby: number, itIsApplied: number): Promise<void> {
        let data: VaccineBaby | null = await this.repositoryVaccineBaby.findOne({ where: { IdVaccineBaby } });
        if (data) {
            data = { ...data, itIsApplied };
            await this.repositoryVaccineBaby.save(data);
        }
    }

    async save(data: VaccineBaby): Promise<void> {
        await this.repositoryVaccineBaby.save(data);
    }

}