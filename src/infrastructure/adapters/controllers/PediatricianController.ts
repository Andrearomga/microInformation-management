import { Request, Response } from 'express';
import { PediatricianService } from '../../../application/services/PediatricianService';
import Pediatrician from '../../../domain/entities/Pediatrician';

export class PediatricianController {

    private pediatricianService: PediatricianService;

    constructor(vaccineGroupService: PediatricianService) {
        this.pediatricianService = vaccineGroupService;
    }

    async list(req: Request, res: Response): Promise<void> {        
        const pediatricianList: Pediatrician[] = await this.pediatricianService.list();
        res.status(200).json({
            status: 200,
            message: `Se listaron ${pediatricianList.length} pediatras`,
            value: pediatricianList
        });
    }

    async searchByName(req: Request, res: Response): Promise<void> {            
        const fullName: string = req.body.fullName ?? "";        
        const pediatricianList: Pediatrician[] = await this.pediatricianService.searchByName(fullName);
        res.status(200).json({
            status: 200,
            message: `Se listaron ${pediatricianList.length} pediatras`,
            value: pediatricianList
        });
    }

}