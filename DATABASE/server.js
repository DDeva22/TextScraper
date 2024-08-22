const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bibleschema",
    password: "JesusisLord"
});


// https://www.youtube.com/watch?v=zECVr6pZoSM



connection.connect(function(error){
    if (error){
        console.log(`DATABASE FAILED TO CONNECT:
        ${error}
        `)
    }else{
        console.log("DATABASE CONNECTION ESTABLISHED!");
    }
});


module.exports = connection;