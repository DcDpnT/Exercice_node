const information= require("./information");
const cowsay = require("cowsay");

const hi = `Hello, I'm ${information.nom} from ${information.campus}!`;
const cow = cowsay.say({ text: hi });

console.log(cow);