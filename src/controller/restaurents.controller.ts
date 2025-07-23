import { Request,Response,NextFunction } from "express";
import { successResponse } from "../utils/responses";

export const getRestaurents = function (req:Request,res:Response,next:NextFunction) {
    try {
        successResponse(res,"OK","Sucess",200)
    } catch (error) {
        next(error)
    }
}