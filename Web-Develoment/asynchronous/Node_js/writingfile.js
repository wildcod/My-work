
const fs = require('fs')

fs.writeFile(__dirname + '/myfile.txt',"Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \n galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also\n the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with\n the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing \nsoftware like Aldus PageMaker including versions of Lorem Ipsum.",function (err){
    if(err) throw err

    console.log("File was written")
})

