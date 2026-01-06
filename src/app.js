import express from 'express'
import dotenv from 'dotenv'
import {routerMovie} from './routes/movies.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT ?? 3000

app.set('view engine', 'ejs')

app.use('/', routerMovie)
app.use(express.static('public'))

app.listen(PORT, ()=>{ 
    console.log(`Escuchando en http://localhost:${PORT}`)
})
