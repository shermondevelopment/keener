import { Response, Request } from 'express'
import bcrypt from 'bcrypt'
import { MysqlConnect } from '../helpers/database'
import { User } from '../entity/User'

export const home = (req: Request, res: Response) => {
  res.render('pages/signin.ejs')
}

export const signin = async (req: Request, res: Response) => {
  const user = MysqlConnect.getRepository(User)
  const info = await user.find({ email: req.body.email })
  res.send(info)
}

export default {
  home,
  signin
}
