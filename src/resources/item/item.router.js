import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

// /api/item
router
  .route('/')
  .get(controllers.getAllItems)
  .post(controllers.createOneItem)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOneItem)
  .put(controllers.updateOneItem)
  .delete(controllers.removeOneItem)

export default router
