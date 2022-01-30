import { Request, Response } from 'express'
import { Produtos } from '../entity/Product'
import { MysqlConnect } from '../helpers/database'

export const reports = async (req: Request, res: Response) => {
  if (!req.session.user) {
    res.redirect('/')
  }
  const produto = MysqlConnect.getRepository(Produtos)
  const findProduct = await produto.find()
  res.render('pages/reports', { findProduct })
}
