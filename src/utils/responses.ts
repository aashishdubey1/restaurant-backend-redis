import { Response } from "express";

export function successResponse(
    res:Response,
    data:any,
    message:string = "Success",
    status:number
){
    return res.status(status).json({
        success:true,
        data,
        message,
    })
}

export function errorResponse(
    res:Response,
    status:number,
    error:string
){
    return res.status(status).json({success:false,error})
}