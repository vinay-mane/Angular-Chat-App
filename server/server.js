const Express = require('express')
require('dotenv').config();
const mongoPump = require('./mongoPump')

const PORT = process.env.PORT
const MONGO = process.env.MONGO

const app = Express()

app.get('/',(req,res)=>{
  res.send('works')
})

app.get('/insert',async(req,res)=>{
  res.send(await mongoPump.insertDocument())
})

app.get('/fetch',async(req,res)=>{
  res.send(await mongoPump.fetchDocuments())
})

app.listen(PORT,()=>{
  console.log(`server on port `+PORT+ ' http://localhost:'+PORT )
})


module.exports={
  PORT:PORT,
  MONGO:MONGO
}