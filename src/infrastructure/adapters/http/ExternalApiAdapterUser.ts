
import axios from 'axios';
import { IExternalApiUsers } from '../../../application/ports/IExternalApiUsers';

export class ExternalApiAdapterUser implements IExternalApiUsers {
    private baseUrl: string;

    constructor() {
        this.baseUrl = "http://autentication:7000/user/validate/token";
    }

    async validateToken(token: string): Promise<boolean> {
        let value: boolean = false;
        try {
            const response = await axios({
                url: `${this.baseUrl}`,
                method: "POST",
                data: {
                    token,
                }
            });            
            if (response.data.value === true) value = true;
        } catch (error) {
            console.error(error);
            value = false
        }
        return value
    }
}

