const mysql = require('mysql');
const { database } = require('./../config');

const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE
});

class Mysql {
    constructor() {}
    static query(SELECT_STRING) {
        return new Promise((resolve, reject) => {
            pool.query(SELECT_STRING, (error, results, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(results)
                };
            });
        })
    }
}

module.exports = Mysql