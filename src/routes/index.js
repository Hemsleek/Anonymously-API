import { Router } from 'express'

const router = Router()

router.get('/signup', (req, res) => res.json({ message: 'it works' }))

export default router
