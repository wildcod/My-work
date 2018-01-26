const fs = require('fs')

let mydata = "cats\ncats\ndogs\ndogs\nmonkey\ncats\nmonkey"

fs.writeFile(__dirname + '/myfile.txt',mydata,function (err){
    if(err) throw err

    fs.readFile(__dirname + '/myfile.txt',function(err,data){
        if(err) throw err

    
    let cntcats = 0;
    let cntdogs = 0;
    let cntmonkey = 0;
    let arr = data.toString().split('\n')
    for(let i = 0; i <= arr.length; i++){
             if(arr[i] === "cats") { ++cntcats; }
        else if(arr[i] === "dogs") { ++cntdogs; }
        else if(arr[i] === "monkey") { ++cntmonkey;}  
    }

    fs.writeFile(__dirname + '/myfile.txt', "cats : " + cntcats + "\nDogs : " + cntdogs + "\nmonkey : " + cntmonkey ,function(err){
        if(err) throw err
    } )
        
    })
})

