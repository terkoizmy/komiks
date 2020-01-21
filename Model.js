let fs = require('fs')
const db = require('./db');
class Model {
    static signup(name,password) {
        return new Promise ((resolve , reject) =>{
            const query = `INSERT INTO user (name, password, status, peminjaman)
               VALUES ('${name}', '${password}', 'off' , 'none')`;
               db.run(query,  (err) => {
                if (err){
                    reject(err)
                } else {
                    resolve('Successfully created a new row!')
                }
                
              })
        })
    
    }


    static login(name,password) {
        return new Promise ((resolve , reject) =>{
            const query = `UPDATE user
               SET status         = 'on'
               WHERE name ='${name}' AND password='${password}'`;

               db.run(query, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve('Successfully login!')
                }
                
              })
            
        })
    }

    static logout(name) {
        return new Promise ((resolve , reject) =>{
            const query = `UPDATE user
               SET status         = 'off'
               WHERE name ='${name}' AND status ='on'`;

               db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Successfully logout!')
                }
                
              })
        })
    }

    static minjam(name,judul) {
        return new Promise ((resolve , reject) =>{
            const query = `UPDATE user
               SET peminjaman         = '${judul}'
               WHERE name ='${name}' AND peminjaman ='none'`;

            const query1 = `UPDATE listbook
                SET status       = 'dipinjam'
                WHERE judul ='${judul}' AND status ='ada'`;

               db.run(query, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Successfully minjam!')
                }
              })

              db.run(query1, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('Successfully minjam!')
                }
              })
        })
    }

    static listbook() {
        return new Promise ((resolve , reject) => {    
            db.all(`SELECT * FROM listbook` ,  (err , listbook) => {
                    if (err) {
                    reject(err)
                    } else {
                    resolve(listbook)
                    }
                })
            })
    }
}

module.exports = Model;