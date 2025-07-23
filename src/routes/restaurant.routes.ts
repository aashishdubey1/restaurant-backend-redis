import express from  'express';
import controller from '../controller';
const restaurentRoutes = express.Router();

const {restaurantsController} = controller

restaurentRoutes.get('/',restaurantsController.getRestaurents)

export default restaurentRoutes