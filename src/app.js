import express from 'express'
import dotenv from 'dotenv'
import {routerMovie} from './routes/movies.js'
import expressLayouts from 'express-ejs-layouts'

const app = express()
dotenv.config()
const PORT = process.env.PORT ?? 5500

app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')

app.use(express.static('public'))
app.use(expressLayouts)

app.use('/', routerMovie)

app.listen(PORT, ()=>{ 
    console.log(`Escuchando en http://localhost:${PORT}`)
})
