import { Request, Response } from 'express';
import { BabyService } from '../../../application/services/BabyService';
import { VaccineGroupService } from '../../../application/services/VaccineGroupService';
import Baby from '../../../domain/entities/Baby';
import vaccineData from '../../../domain/entities/VaccineData';
import Item from '../../../domain/entities/Item';
import { Console } from 'console';




export class BabyController {

    private babyService: BabyService;
    private vaccineGroupService: VaccineGroupService;
    private vaccineData: Item[];

    constructor(babyService: BabyService, vaccineGroupService: VaccineGroupService) {
        this.babyService = babyService;
        this.vaccineGroupService = vaccineGroupService;
        this.vaccineData = vaccineData
    }

    async save(req: Request, res: Response): Promise<void> {
        let data: Baby = req.body.baby ?? { IdBaby: 0, birthdate: "", gender: 0, IdUser: 0, nameBaby: "", userRol: "", height: 0, weight: 0 };        
        
        const baby: Baby = await this.babyService.save(data);

        if (req.body.IdBaby === 0 || req.body.IdBaby === undefined) {
            this.vaccineData.map((item: Item) => {
                this.vaccineGroupService.save({ IdBaby: baby.IdBaby, description: item.description, itIsApplied: 0, IdVaccineGroup: item.IdVaccineGroup })
            });
        }

        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: baby
        });
    }

    async getBabyById(req: Request, res: Response): Promise<void> {
        const IdBaby : number = isNaN(Number(req.params.IdBaby)) ? 0: Number(req.params.IdBaby);    
        const baby: Baby = await this.babyService.getBabyById(IdBaby);
        console.log(baby)
        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: baby
        });    
    }
    //nuevo actualizar
    async update(req: Request, res: Response): Promise<void> {
       
            let IdBaby = parseInt(req.params.IdBaby);
            let data = req.body.baby;
            const baby = await this.babyService.updateBabyId(IdBaby, data);
            res.status(200).json({
                status: 200,
                message: 'Datos actualizados',
                value: baby,
            });
      
    }

 

}