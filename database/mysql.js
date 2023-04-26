const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

con.connect(function(err, res){

    if(err){
        console.log('Error cant connect to the Database...');
    }else{
        console.log('Successfully Connected to MySQL Server!');
    }
});

module.exports = con;