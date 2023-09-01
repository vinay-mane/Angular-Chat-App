const Express = require('express')
const cors = require('cors');
require('dotenv').config();
// const mongoPump = require('./mongoPump')
const use = require('./user');
const message = require('./message');
const { async } = require('rxjs');
const { addAuth } = require('./middleware');
const user = require('./user');

const PORT = process.env.PORT
const MONGO = process.env.MONGO

const app = Express()
app.use(cors());
app.use(Express.json());
app.use(addAuth)

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

app.post('/send',async(req,res)=>{
  const result = await message.sendMessage(req.body.email,req.body.reciver,req.body.message)
  console.log(result)
  res.json(result)
})

app.get('/send2',async(req,res)=>{
  const result = await message.sendMessage('vinay2','vinay1','message')
  console.log(result)
  res.json(result)
})

app.get('/start',async(req,res)=>{
  const result = await message.startMessage('vinay1','vinay3')
  console.log(result)
  res.json(result)
})

app.post('/fetch',async(req,res)=>{
  const result = await message.fetchMessage(req.body.email,req.body.reciver)
  console.log(result)
  res.json(result)
})

app.post('/contact_list',async(req,res)=>{
  const result = await use.listUsersContact(req.body)
  res.send(result)
})

app.post('/test',async(req,res)=>{
  // console.log(await use.authToUser(req.body))
  use.listUsersContact()
  res.json(req.body)
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