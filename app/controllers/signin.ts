import { Response, Request } from 'express'
import { MysqlConnect } from '../helpers/database'
import { User } from '../entity/User'

export const home = (req: Request, res: Response) => {
  res.render('pages/signin.ejs')
}

export const signin = async (req: Request, res: Response) => {
  const user = MysqlConnect.getRepository(User)
  const info = await user.find({ name: 'victor' })
  res.send(info)
}

export default {
  home,
  signin
}
