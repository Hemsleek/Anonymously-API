import { User } from '../models'

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body

  try {
    const userExist = await User.countDocuments({ $or: [{ email }, { username }] })
    if (userExist) return res.status(400).send('Username/Email already exist')
    const user = await new User({
      name, username, email, password
    }).save()
    res.json({
      message: 'signup successful',
      payload: user
    })
  } catch (error) {
    res.status(500).send('internal server error')
  }
}

export const login = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const user = await User.findOne({ $or: [{ email }, { username }] })
    if (!user) return res.status(404).send('incorrect login credentials,please try again')
    if (user.password !== password) return res.status(404).send('incorrect login credentials,please try again')
    res.json({
      message: 'Login successful',
      payload: user
    })
  } catch (error) {
    res.status(500).send('internal server error')
  }
}
