const mongoPump = require('./mongoPump.js')

const sendMessage = async(sender,reciver,message)=>{
  const result_s = await mongoPump.pushDocuments('Messages',sender,
    {name:reciver},
    {message:message}
  )
  const result_r = await mongoPump.pushDocuments('Messages',reciver,
    {name:sender},
    {message:message}
  )
  return {}
}

const startMessage = async(sender,reciver)=>{
  const result_s = await mongoPump.insertDocument('Messages',sender,
    {
      name:reciver,
      message:[]
    },
  )
  const result_r = await mongoPump.insertDocument('Messages',reciver,
    {
      name:sender,
      message:[]
    },
  )
  return {}
}

const fetchMessage = async(sender,reciver)=>{
  const result = await mongoPump.fetchDocuments('Messages',sender,
    {
      name:reciver,
    },
  )
  return result
}



module.exports = {
  startMessage:startMessage,
  sendMessage:sendMessage,
  fetchMessage:fetchMessage
}