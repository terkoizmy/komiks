let Model = require("./Model")
let View = require("./View")

class Controller {
    static signup(name,password){
        Model.signup(name,password)
        .then(message => {
            View.signup(message)
        }).catch(err =>{
            console.log(err)
        })
    }

    static login(name,password){
        Model.login(name,password)
        .then(message => {
            View.login(message)
        }).catch(err =>{
            console.log(err)
        })
    }

    static logout(name){
        Model.logout(name)
        .then(message => {
            View.logout(message)
        }).catch(err =>{
            console.log(err)
        })
    }

    static listbook(){
        Model.listbook()
        .then(message => {
            View.listbook(message)
        }).catch(err =>{
            console.log(err)
        })
    }

    static minjam(name,judul){
        Model.minjam(name,judul)
        .then(message => {
            View.minjam(message)
        }).catch(err =>{
            console.log(err)
        })
    }


    static help() {
        View.help()
    }
}

module.exports = Controller;