import { Router } from 'express'
import { home, signin } from '../controllers/signin'

const router = Router()

router.post('/signin', signin)
router.get('/', home)

export default router
