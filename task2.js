var figlet = require("figlet");
var arg = process.argv[2];

figlet.text(arg, function(error, data) {
    if (error)
        console.log(error);
    else
        console.log(data);
});
