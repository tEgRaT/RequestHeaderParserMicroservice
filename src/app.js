import express from 'express'
import { Parser } from './parser'

export const app = express()

app.get('/', (req, res) => {
    let parsedData = Parser.parseRequest(req)
    res.status(200).send(parsedData)
})
