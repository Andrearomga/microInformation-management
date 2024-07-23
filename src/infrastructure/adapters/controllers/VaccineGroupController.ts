import { Request, Response } from 'express';
import { VaccineGroupService } from '../../../application/services/VaccineGroupService';
import VaccineGroup from '../../../domain/entities/VaccineGroup';

export class VaccineGroupController {

    private vaccineGroupService: VaccineGroupService;

    constructor(vaccineGroupService: VaccineGroupService) {
        this.vaccineGroupService = vaccineGroupService;
    }

    async getList(req: Request, res: Response): Promise<void> {
        
        const vaccineGroup: VaccineGroup[] = await this.vaccineGroupService.getList();
        res.status(200).json({
            status: 200,
            message: `Se listaron ${vaccineGroup.length} grupos de vacunas`,
            value: vaccineGroup
        });
    }

    async getListByBaby(req: Request, res: Response): Promise<void> {        
        let IdBaby: number = isNaN(Number(req.params.IdBaby)) ? -100 : Number(req.params.IdBaby);       
        let IdVaccineGroup: number = isNaN(Number(req.params.IdVaccineGroup)) ? -100 : Number(req.params.IdVaccineGroup);        
        const vaccineGroup: VaccineGroup[] = await this.vaccineGroupService.getListByBaby(IdBaby,IdVaccineGroup);
        
        res.status(200).json({
            status: 200,
            // message: `Se listaron ${vaccineGroup.length} grupos de vacunas`,
            value: vaccineGroup
        });
    }

    async update(req: Request, res: Response): Promise<void> {
        const IdVaccineBaby: number = +req.body.IdVaccineBaby ?? 0
        const itIsApplied: number = +req.body.itIsApplied ?? 0
        await this.vaccineGroupService.update(IdVaccineBaby, itIsApplied);
        res.status(200).json({
            status: 200,
            message: `Valor actualizado`,
            
        });
    }

}