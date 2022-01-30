import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import { MysqlConnect } from '../helpers/database'
import { User } from '../entity/User'
import { Produtos } from '../entity/Product'

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any }
  }
}

export const home = (req: Request, res: Response) => {
  if (req.session.user) {
    res.redirect('/dashboard')
  }
  res.render('pages/signin.ejs', { error: '', name: '' })
}

export const signin = async (req: Request, res: Response) => {
  const user = MysqlConnect.getRepository(User)
  const info = await user.find({ email: req.body.email })
  if (info[0]) {
    const password = await bcrypt.compare(req.body.password, info[0].password)
    if (!password) {
      res.redirect('/')
    }
    req.session.user = { ...info[0] }
    res.redirect('dashboard')
  }
  res.render('pages/signin.ejs', { error: 'Email não cadastrado!', name: '' })
}

export const dashboard = async (req: Request, res: Response) => {
  if (!req.session.user) {
    res.redirect('/')
  }
  const product = MysqlConnect.getRepository(Produtos)
  const findProduct = await product.find()
  res.render('pages/dashboard', { findProduct })
}

export const logout = (req: Request, res: Response) => {
  req.session.user = undefined
  res.redirect('/')
}

export default {
  home,
  signin,
  dashboard,
  logout
}
