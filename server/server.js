const Express = require('express')
require('dotenv').config();
// const mongoPump = require('./mongoPump')
const use = require('./user')

const PORT = process.env.PORT
const MONGO = process.env.MONGO

const app = Express()
app.use(Express.json());

app.get('/',(req,res)=>{
  res.send('works')
})

app.get('/signup',async(req,res)=>{
  const result = await use.register('axbf','bb')
  console.log(result)
  res.json(result)
})

app.get('/login',async(req,res)=>{
  const result = await use.login('axbf','bb')
  console.log(result)
  res.json(result)
})



// app.get('/insert',async(req,res)=>{
//   res.send(await mongoPump.insertDocument())
// })



// app.get('/fetch',async(req,res)=>{
//   res.send(await mongoPump.fetchDocuments())
// })

app.listen(PORT,()=>{
  console.log(`server on port `+PORT+ ' http://localhost:'+PORT )
})


module.exports={
  PORT:PORT,
  MONGO:MONGO
}