import { Request,Response,NextFunction } from "express";
import { successResponse } from "../utils/responses";

export const getCuisines = (req:Request,res:Response,next:NextFunction) => {
    try {
        successResponse(res,"OK","Sucess",200)
    } catch (error) {
        next(error)
    }
}

export const getCuisinesById = function(req:Request,res:Response,next:NextFunction){
    try {
        successResponse(res,"Ok with id","success",200)
    } catch (error) {
        next(error)
    }
}