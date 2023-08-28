const mongoPump = require('./mongoPump.js')

const collection_name = 'User'

const register = async(email,password)=>{
  const result = await mongoPump.insertDocument(collection_name,{email:email,password:password})
  return result
}

const login = async(email,password)=>{
  mongoPump.fetchDocuments(collection_name,{email:"value1",password:"value2"})
}

module.exports={
  register:register,
  login:login
}