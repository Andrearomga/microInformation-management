import { Like, Repository } from 'typeorm';
import Pediatrician from '../../../domain/entities/Pediatrician';
import { PediatricianRepository } from '../../../domain/repositories/PediatricianRepository';
import PediatricianEntity from '../entities/PediatricianEntity';
import { AppDataSource } from '../../config/data-source';


export class TypeORMPediatricianRepository implements PediatricianRepository {

    private repositoryPediatrician: Repository<PediatricianEntity>;

    constructor() {
        this.repositoryPediatrician = AppDataSource.getRepository(PediatricianEntity);
    }

    async list(): Promise<Pediatrician[]> {
        let PediatricianList: Pediatrician[] = await this.repositoryPediatrician.find();
        return PediatricianList;
    }

    async searchByName(fullName: string): Promise<Pediatrician[]> {
        // Utiliza `Like` para buscar similitudes en el nombre
        let pediatricianList: Pediatrician[] = await this.repositoryPediatrician.find({
            where: {
                fullName: Like(`%${fullName}%`), // Busca similitudes en el campo `name`
            },
        });
        return pediatricianList;
    }

}