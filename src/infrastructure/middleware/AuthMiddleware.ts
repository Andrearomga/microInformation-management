import { NextFunction, Request, Response } from 'express';
import { ExternalApiAdapterUser } from '../adapters/http/ExternalApiAdapterUser';

class AuthMiddleware {

    private externalApiAdapterUser: ExternalApiAdapterUser = new ExternalApiAdapterUser();

    constructor() {
        this.validateUserToken = this.validateUserToken.bind(this);
    }

    async validateUserToken(req: Request, res: Response, next: NextFunction): Promise<void> {        
        const token: string | string[] | undefined = req.headers['token'];

        if (!token || (Array.isArray(token) && token.length === 0)) {
            res.status(403).json({
                status: 403,
                message: "Acceso denegado (Forbidden)",
            });
            return;
        }
        const tokenString = Array.isArray(token) ? token[0] : token;        
        try {            
            const value: boolean = await this.externalApiAdapterUser.validateToken(tokenString)
            
            if (value) {
                next();
            } else {
                res.status(401).json({
                    status: 401,
                    message: "Token inválido o expirado.",
                });
            }

        } catch (error) {            
            res.status(401).json({
                status: 401,
                message: "Token inválido o expirado.",
            });
        }
    }

}

export default AuthMiddleware;