const mysql = require('mysql');
const env = require('dotenv');

const pool = mysql.createPool({
    connectionLimit:10,
    password: '',
    user: 'root' ,
    database:'events',
    host: 'localhost',
    port: '3306'

});

let eventsdb = {};

//GET ALL EVENTS FROM THE DATABASE

eventsdb.allEvents = () => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM event", (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

//GET EVENT BY NAME FROM THE DATABASE

eventsdb.nameEvents = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM event WHERE Name = ?", [name], (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};


//GET ALL BARS FROM THE DATABASE

eventsdb.allBars = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM bar", (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

//GET BAR BY NAME FROM THE DATABASE

eventsdb.nameBars = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM bar WHERE Name = ?", [name], (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

//GET BAR BY NAME FROM THE DATABASE

eventsdb.idBars = (id) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM bar WHERE id = ?", [id], (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};



//GET EVENTS BY NAME FROM THE DATABASE

eventsdb.nameBars = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM bar WHERE Name = ?", [name], (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

//GET ALL CLUBS FROM THE DATABASE

eventsdb.allClubs = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM club", (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

//GET EVENTS BY NAME FROM THE DATABASE

eventsdb.nameClubs = (name) => {

    return new Promise((resolve, reject) => {

        pool.query("SELECT * FROM club WHERE Name = ?", [name], (err, results) =>{

            if(err){
                return reject(err);
            }

            return resolve(results);
        });
    });

};

module.exports = eventsdb;