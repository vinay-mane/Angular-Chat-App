const { hash } = require('./encrypt.js')
const mongoPump = require('./mongoPump.js')

const database_name = 'ChatApp'
const user_collection_name = 'User'
const auth_collection_name = 'Auth'

const register = async(email,password)=>{
  password=hash(password)
  const userCheck = await mongoPump.fetchDocuments(database_name,user_collection_name,{email:email})
  if (userCheck.length==0){
    const id = await mongoPump.insertDocument(database_name,user_collection_name,{email:email,password:password})
    const result = await mongoPump.insertDocument(database_name,auth_collection_name,
      {
        user_id:id.collection_id,
        email:email,
        auth:password
      }
    )
    return {auth:password};
  }
  return{msg:'user exists'}
}

const login = async(email,password)=>{
  const user = mongoPump.fetchDocuments(database_name,user_collection_name,{email:email,password:password})
  return user
}

module.exports={
  register:register,
  login:login
}