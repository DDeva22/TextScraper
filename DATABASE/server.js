import mysql from "mysql2/promise";


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "Bible"
});


// https://www.youtube.com/watch?v=zECVr6pZoSM