import { Request, Response } from "express";
import createUserinfoService from "../../services/infoUser/createInfo.service";

const createInfoController = async(req:Request,res:Response)=>{
    const {name,email,telephone} = req.body

    const newInfo = await createUserinfoService({name,email,telephone})
    return res.status(201).json(newInfo);

}
export default createInfoController
