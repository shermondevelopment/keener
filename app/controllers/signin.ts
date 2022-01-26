import { Response, Request } from 'express'

export const home = (req: Request, res: Response) => {
  res.render('pages/signin.ejs')
}

export const signin = (req: Request, res: Response) => {
  res.json(req.body)
}

export default {
  home,
  signin
}
