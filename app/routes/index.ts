import { Router } from 'express'
import { home, signin, dashboard, logout } from '../controllers/signin'
import {
  addproduct,
  addpro,
  editProduct,
  editpro
} from '../controllers/add-product'

const router = Router()

router.post('/signin', signin)
router.get('/', home)
router.get('/dashboard', dashboard)
router.get('/logout', logout)

/* Routes of produdct */

router.get('/addproduct', addproduct)
router.post('/addpro', addpro)
router.get('/editProduct/:id', editProduct)
router.post('/editpro', editpro)

export default router
