import { Response, Request } from 'express'

export const signin = (req: Request, res: Response) => {
  res.render('pages/signin')
}

export default {
  signin
}
