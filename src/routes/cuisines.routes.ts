import express from  'express';
import controller from '../controller';
const cuisinesRoutes = express.Router();

const {cuisinesController} = controller

cuisinesRoutes.get('/',cuisinesController.getCuisines)

export default cuisinesRoutes