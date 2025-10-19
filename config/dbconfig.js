require("dotenv").config();
const {Sequelize} = require("sequelize");

const  sequeliza = new Sequelize(process.env.DB_NAME,process.env.DB_USER,{
    host:process.env.host,
    port:process.env.port,
    dialect:"postgres",
    logging:false,
});



 try  {
     sequeliza.authenticate();
    console.log("connection has been succufull")
    module.exports =  sequeliza

}
catch(error){
console.error(error)

}
// contains configuration for connecting to the database,like the hostname,username and password
