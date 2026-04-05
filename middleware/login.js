//const jwt = require("jsonwebtoken")

const Admin = {
  username:"joe nguwo",
  password:"1234"
}

const loginmiddleware =  (req,res,next) => {
  const {username,password} = req.params 

  if(username !== Admin.username && password !== Admin.password){
    return  res.status(401).json({"code":222,"message":"wrong credtials"}).end()
    
  }

  else{
    res.status(200).json({"message":"correct"})
    

  }

  next()
  
  


}

module.exports = loginmiddleware;


/*

const validUser = {
    username: 'calaca',
    password: '12345'
  };
  
const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  const token = req.headers.authorization;
  
  if (!token || token === undefined) return next({ code: 401, message: 'missing auth token' });
  
  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }
  
  next();
}
  
module.exports = authMiddleware;

*/