const crypto = require('crypto');
const { resolve } = require('path');
const randomBytes = require('randombytes');
require('dotenv').config();



// Generate a random salt
const salt = process.env.SALT

// Create a hash using the salt and password

const hash = (plaintext)=>{
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = crypto.pbkdf2Sync(plaintext, salt, 100000, 64, 'sha512');
  const hashedPassword = derivedKey.toString('hex');
  return hashedPassword
}

module.exports={
  hash:hash
}