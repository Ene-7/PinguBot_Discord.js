const mysql = require('mysql2/promise');
const {DatabaseUser, DatabasePassword, DatabaseName} = require('../config.json');
const { SystemChannelFlags } = require('discord.js');
try{
    module.exports = mysql.createConnection({
        user: DatabaseUser,
        password: DatabasePassword,
        database: DatabaseName
    });
}
catch(error){
    console.log("Could not login to database! " + error);
    process.exit(-1);
}