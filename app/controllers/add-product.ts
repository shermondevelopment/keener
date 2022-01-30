import { Response, Request } from 'express'
import { Produtos } from '../entity/Product'
import { MysqlConnect } from '../helpers/database'

export const addproduct = (req: Request, res: Response) => {
  res.render('pages/addproduct')
}

export const addpro = async (req: Request, res: Response) => {
  const produto = MysqlConnect.getRepository(Produtos)
  if (
    req.body.code &&
    req.body.name &&
    req.body.price &&
    req.body.quantidade &&
    req.body.quantidademinima
  ) {
    const addProduct = await produto.create(req.body)
    await produto.save(addProduct)
    res.redirect('/dashboard')
  }
}

export const editProduct = async (req: Request, res: Response) => {
  const produto = MysqlConnect.getRepository(Produtos)
  const findProduct = await produto.find({ id: req.params.id })
  res.render('pages/editproduct', { findProduct })
}

export const editpro = async (req: Request, res: Response) => {
  const produto = MysqlConnect.getRepository(Produtos)
  if (
    req.body.code &&
    req.body.name &&
    req.body.price &&
    req.body.quantidade &&
    req.body.quantidademinima
  ) {
    // const addProduct = await produto.create(req.body)
    await produto.update(req.body.id, req.body)
    res.redirect('/dashboard')
  }
  res.render('/')
}
