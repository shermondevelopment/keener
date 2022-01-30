import { Router } from 'express'
import { home, signin, dashboard, logout } from '../controllers/signin'

const router = Router()

router.post('/signin', signin)
router.get('/', home)
router.get('/dashboard', dashboard)
router.get('/logout', logout)

export default router
