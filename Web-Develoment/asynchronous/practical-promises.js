function downloadfile (url){
    console.log("file is downloading from : " + url)

    setTimeout(function (){
        return new Promise(function (resolve , reject){
            let filename = url.split("/").pop()
            resolve(filename)
        },3000)
    })

function resize (filename){
    console.log("Start resizing :")

    setTimeout(function (){
        return new Promise(function (resolve , reject){
            let resizedfile = filename.split(".")[0]
            resolve(resizedfile)
        },3000)
    })
}
}

downloadfile('http://www.google.com//txt.png')
.then(function (filename){
 resize(filename)
.then(function (resizedfile){
          console.log("After resized file :" + resizedfile + "-resized.jpeg")
})
})