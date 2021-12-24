import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDirctory = path.join(__dirname, '../public')
console.log(__dirname)
console.log(publicDirctory)
app.use(express.static(publicDirctory))


app.use(express.static(__dirname))

const port = 10020
app.listen(port ,()=>{
  console.log(`server is up on port ${port}`)
})