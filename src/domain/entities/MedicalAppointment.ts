


class MedicalAppointment {
    constructor(
        public IdMedicalAppointment: number,
        public IdBaby: number,
        public title: string,
        public description: string,
        public hour: string,
        public date: string,
    ) { }
}

export default MedicalAppointment
