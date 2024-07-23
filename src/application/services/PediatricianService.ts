import Pediatrician from '../../domain/entities/Pediatrician';
import { PediatricianRepository } from '../../domain/repositories/PediatricianRepository';

export class PediatricianService {

    constructor(private vaccineGroupRepository: PediatricianRepository) { }

    async list(): Promise<Pediatrician[]> {
        const pediatricianList: Pediatrician[] = await this.vaccineGroupRepository.list();
        return pediatricianList;
    }

    async searchByName(fullName: string): Promise<Pediatrician[]> {
        const pediatricianList: Pediatrician[] = await this.vaccineGroupRepository.searchByName(fullName);
        return pediatricianList;
    }

}
