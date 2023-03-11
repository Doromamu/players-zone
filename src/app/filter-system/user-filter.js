import { tokenService } from "./manager-token";

export function userFilter (req,res,next) {
    if(!req.body.token){
       return res.status(403).send({
        mensage : "Peticion sin token"
       });
    }

    next();
};