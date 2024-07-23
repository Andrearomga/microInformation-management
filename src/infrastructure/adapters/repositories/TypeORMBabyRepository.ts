import { Repository } from 'typeorm';
import Baby from '../../../domain/entities/Baby';
import { BabyRepository } from '../../../domain/repositories/BabyRepository';
import BabyEntity from '../entities/BabyEntity';
import { AppDataSource } from '../../config/data-source';

export class TypeORMBabyRepository implements BabyRepository {

    private repositoryBaby: Repository<BabyEntity>;

    constructor() {
        this.repositoryBaby = AppDataSource.getRepository(BabyEntity);
    }

    async save(data: Baby): Promise<Baby> {
        let baby: Baby = await this.repositoryBaby.save(data);
        return baby
    }

    async getBabyByID(IdUser: number): Promise<Baby> {
        let baby: Baby = await this.repositoryBaby.findOneBy({ IdUser }) ?? { birthdate: "", gender: 0, height: 0, IdBaby: 0, IdUser: 0, nameBaby: "", userRol: "", weight: 0 };
        return baby
    }
    //update nuevo
    
    async updateBabyId(IdBaby: number, data: Baby): Promise<Baby> {
        let babyEntity = await this.repositoryBaby.findOneBy({ IdBaby });
        if (babyEntity) {
            // Mapear las propiedades del objeto `Baby` al objeto `BabyEntity`
            babyEntity.birthdate = data.birthdate;
            babyEntity.gender = data.gender;
            babyEntity.height = data.height;
            babyEntity.IdUser = data.IdUser;
            babyEntity.nameBaby = data.nameBaby;
            babyEntity.userRol = data.userRol;
            babyEntity.weight = data.weight;

            await this.repositoryBaby.save(babyEntity);
            return babyEntity;
        } else {
            throw new Error(`Baby with IdBaby ${IdBaby} not found`);
        }
    }

    

}