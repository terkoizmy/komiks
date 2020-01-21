let args = process.argv.splice(2,7)

let command = args[0]

let Controller = require('./Controller')

console.log('==================== Library =======================')
switch(command) {
    case "login":
        Controller.login(args[1],args[2])
        break;
    case "signup":
        Controller.signup(args[1],args[2])
        break;
    case "logout":
        Controller.logout(args[1])
        break;
    case "listbook":
        Controller.listbook()
        break;
    case "minjam":
        Controller.minjam(args[1],args[2])
        break;
    case "help":
        Controller.help()
        break;
    default:
        console.log('input true command')
        break;
}