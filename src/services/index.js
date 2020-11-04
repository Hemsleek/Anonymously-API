import { User } from '../models'

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body

  try {
    const user = await new User({
      name, username, email, password
    }).save()

    res.json({
      message: 'signup successful',
      payload: user
    })
  } catch (error) {
    res.status(500).send(`internal server error${error}`)
  }
}
