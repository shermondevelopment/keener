import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import { MysqlConnect } from '../helpers/database'
import { User } from '../entity/User'

export const home = (req: Request, res: Response) => {
  res.render('pages/signin.ejs', { error: '', name: '' })
}

export const signin = async (req: Request, res: Response) => {
  const user = MysqlConnect.getRepository(User)
  const info = await user.find({ email: req.body.email })
  if (info[0]) {
    console.log(info[0])
    const password = await bcrypt.compare(req.body.password, info[0].password)
    if (!password) {
      res.render('pages/signin.ejs', { error: 'senha errada!', name: '' })
    }
    res.render('pages/dashboard.ejs', { name: info[0].name })
  }
  res.render('pages/signin.ejs', { error: 'Email não cadastrado!', name: '' })
}

export default {
  home,
  signin
}
