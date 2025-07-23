import express from 'express'
import restaurentRoutes from './restaurant.routes'
import cuisinesRoutes from './cuisines.routes'

const apiRouter = express.Router()

apiRouter.use('/restaurant',restaurentRoutes)
apiRouter.use('/cuisines',cuisinesRoutes)

export default apiRouter