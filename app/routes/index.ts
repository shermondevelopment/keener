import { Router } from 'express'
import { home, signin, dashboard, logout } from '../controllers/signin'
import {
  addproduct,
  addpro,
  editProduct,
  editpro
} from '../controllers/product'
import { reports } from '../controllers/reports'
import { signup, signupRender } from '../controllers/signup'

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

/* reports */

router.get('/reports', reports)

/* signup */

router.get('/signup', signup)
router.post('/signup', signupRender)

export default router
