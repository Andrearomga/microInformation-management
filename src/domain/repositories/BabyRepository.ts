// src/domain/repositories/UserRepository.ts
import Baby from '../entities/Baby';

export interface BabyRepository {
    save(baby: Baby): Promise<Baby>;
    getBabyByID(IdBaby: number): Promise<Baby>;
    //implementar el actualizar con el id del bebe
    updateBabyId(IdBaby: number, baby: Baby): Promise<Baby>;

}
