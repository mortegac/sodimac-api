const mysql = require('mysql');
const env = require('node-env-file');
env(__dirname + '/.env');

const connectObj={
    host: `${process.env.MYHOST}`,
    user:`${process.env.MYUSER}`,
    password:`${process.env.MYPASSWORD}`,
    database:`${process.env.MYDATABASE}`,
    port:`${process.env.MYPORT}`
};

// console.log(connectObj);

const dbConn = mysql.createConnection(connectObj);


try{
    // ...sentences
    dbConn.connect( function(err){
        if (err) return err
    });

}catch(error){
    return error
}


module.exports = dbConn;

// function(err){}
// (err)=>{}

