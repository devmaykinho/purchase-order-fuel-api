import { RequestHandler } from 'express'
import multer from 'multer'

export const adaptMulter: RequestHandler = (req, res, next) => {
  const upload = multer().single('file')
  upload(req, res, error => {
    if (error !== undefined) {
      return res.status(500).json({ error: 'Erro ao carregar o arquivo' })
    }
    if (req.file !== undefined) {
      req.locals = { ...req.locals, file: { buffer: req.file.buffer, mimeType: req.file.mimetype } }
    }
    next()
  })
}
