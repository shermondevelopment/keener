import { Router } from 'express'
import { signin } from '../controllers/signin'

const router = Router()

router.get('/signin', signin)
