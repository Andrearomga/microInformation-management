


import { Request, Response } from 'express';
import { FeedingService } from '../../../application/services/FeedingService';
import Feeding from '../../../domain/entities/Feeding';



export class FeedingController {

    private feedingService: FeedingService;

    constructor(feedingService: FeedingService) {
        this.feedingService = feedingService;
    }

    async save(req: Request, res: Response): Promise<void> {
        console.log("Guardado alimentacio")
        let data: Feeding = req.body.feeding ?? { IdFeeding: 0, title: "", hour: "", IdBaby: 0, notes: "" };
        console.log(data)
        const feeding: Feeding = await this.feedingService.save(data);

        res.status(200).json({
            status: 200,
            message: `Datos guardados`,
            value: feeding
        });
    }

    async list(req: Request, res: Response): Promise<void> {
    
        let IdBaby: number = isNaN(Number(req.params.IdBaby)) ? 0 : Number(req.params.IdBaby);
        const dreams: Feeding[] = await this.feedingService.list(IdBaby);

        res.status(200).json({
            status: 200,
            message: `Se listaron ${dreams.length} datos`,
            value: dreams
        });

    }

    async delete(req: Request, res: Response): Promise<void> {

        let IdFeeding: number = isNaN(Number(req.params.IdFeeding)) ? 0 : Number(req.params.IdFeeding);
        await this.feedingService.delete(IdFeeding);

        res.status(200).json({
            status: 200,
            message: `Dato eliminado`,
        });
        
    }


}



