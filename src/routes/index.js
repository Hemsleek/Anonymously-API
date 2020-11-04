import { Router } from 'express'
import { signup, login } from '../services'
const router = Router()

router.post('/signup', signup)
router.post('/login', login)

export default router
