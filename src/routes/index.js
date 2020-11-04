import { Router } from 'express'
import { signup } from '../services'
const router = Router()

router.post('/signup', signup)

export default router
