// src/domain/repositories/UserRepository.ts
import VaccineBaby from '../entities/VaccineBaby';
import VaccineGroup from '../entities/VaccineGroup';

export interface VaccineGroupRepository {
    getList(): Promise<VaccineGroup[]>;
    getListByBay(IdBaby: number, number: number): Promise<VaccineBaby[]>;
    update(IdVaccineBaby: number, itIsApplied: number): Promise<void>
    save(vaccineBaby: VaccineBaby): Promise<void>
}
