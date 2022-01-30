import { Request, Response } from 'express'
import { User } from '../entity/User'
import { MysqlConnect } from '../helpers/database'
import bcrypt from 'bcrypt'

export const signup = (req: Request, res: Response) => {
  res.render('pages/signup', { error: '' })
}

export const signupRender = async (req: Request, res: Response) => {
  const { name, email, password } = req.body
  const repository = MysqlConnect.getRepository(User)
  const user = await repository.find({ email })
  if (user) {
    res.render('pages/signup', { error: 'email cadastrado! Faça login' })
  }
  if (name && email && password) {
    const user = repository.create({
      name,
      email,
      password: await bcrypt.hash(password, 10)
    })
    await repository.save(user)
    res.redirect('/')
  }
  res.render('pages/signup', { error: '' })
}
