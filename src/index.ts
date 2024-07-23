import express from 'express';
import { connectDatabase } from './infrastructure/config/database';
import vaccineGroupRoutes from './routes/VaccineGroupRoutes';
import BabyRoutes from './routes/BabyRoutes';
import PediatricianRoutes from './routes/PediatricianRoutes';
import MedicalAppointmentRoutes from './routes/MedicalAppointment';
import DreamRoutesRoutes from './routes/DreamRoutes';
import FeedingRoute from './routes/FeedingRoute';

const startServer = async () => {
    console.clear();

    await connectDatabase();

    const app = express();
    app.use(express.json({ limit: "1gb" }));

    const URLBase = "";

    app.use(`${URLBase}/vaccines`, vaccineGroupRoutes);
    app.use(`${URLBase}/baby`, BabyRoutes);
    app.use(`${URLBase}/pediatrician`, PediatricianRoutes);
    app.use(`${URLBase}/medicalAppointment`, MedicalAppointmentRoutes);
    app.use(`${URLBase}/dream`, DreamRoutesRoutes);
    app.use(`${URLBase}/feeding`, FeedingRoute);

    const PORT = 3001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

};

startServer();
