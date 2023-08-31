const { authToUser } = require("./user")

const addAuth = async(req,res,next)=>{
  const userData = await authToUser(req.body)
  req.body.email = userData.email
  next();
}

module.exports = {
  addAuth:addAuth
}