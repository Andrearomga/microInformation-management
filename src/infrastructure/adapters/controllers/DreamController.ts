


import { Request, Response } from 'express';
import { DreamService } from '../../../application/services/DreamService';
import Dream from '../../../domain/entities/Dream';



export class DreamController {

    private dreamService: DreamService;

    constructor(dreamService: DreamService) {
        this.dreamService = dreamService;
    }

    async save(req: Request, res: Response): Promise<void> {
        let data: Dream = req.body.dream ?? { IdDream: 0, IdBaby: 0, finalHour: "", initialHour: "", IsActivated: "" };
        console.log(data)
        const dream: Dream = await this.dreamService.save(data);

        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: dream
        });
    }

    async list(req: Request, res: Response): Promise<void> {                
        let IdBaby: number = isNaN(Number(req.params.IdBaby)) ? 0: Number(req.params.IdBaby);           
        
        const dreams: Dream[] = await this.dreamService.list(IdBaby);

        res.status(200).json({
            status: 200,
            message: `Se listaron ${dreams.length} sueños`,
            value: dreams
        });
    }

    async update(req: Request, res: Response): Promise<void> {                
        let IdDream: number = isNaN(Number(req.params.IdDream)) ? 0: Number(req.params.IdDream);                
        await this.dreamService.update(IdDream);

        res.status(200).json({
            status: 200,
            message: `Dato actualizado`,
        });
    }

    async delete(req: Request, res: Response): Promise<void> {                
        let IdDream: number = isNaN(Number(req.params.IdDream)) ? 0: Number(req.params.IdDream);                
        await this.dreamService.delete(IdDream);

        res.status(200).json({
            status: 200,
            message: `Dato eliminado`,
        });
    }


}



