const fs = require('fs')

fs.readFile(__dirname + '/myfile.txt', function(err,data){
    if(err) throw err

    let x = data.toString()
    console.log(x)


    
})