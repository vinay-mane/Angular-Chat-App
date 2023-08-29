const mongoPump = require('./mongoPump.js')

const user_collection_name = 'User'
const auth_collection_name = 'Auth'

const register = async(email,password)=>{
  const userCheck = await mongoPump.fetchDocuments(user_collection_name,{email:email,password:password})
  if (userCheck.length==0){
    const id = await mongoPump.insertDocument(user_collection_name,{email:email,password:password})
    const result = await mongoPump.insertDocument(auth_collection_name,
      {
        user_id:id.collection_id,
        email:email,
        auth:'101'
      }
    )
    return result;
  }
  return{msg:'user exists'}
}

const login = async(email,password)=>{
  mongoPump.fetchDocuments(user_collection_name,{email:"value1",password:"value2"})
}

module.exports={
  register:register,
  login:login
}