import React,{Component} from 'react'
import keyboardJS from 'keyboardjs'
import './Download.css'


class Download extends Component {

    
    DownloadHandler = () => {
         
        // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
        // FileSaver.saveAs(blob, "hello world.pdf");
        keyboardJS.bind('PrtScn', function(e) {
           console.log(e)
          });
             
       console.log("press")
// 
keyboardJS.pressKey('PrtScn');

// });



        // var canvas = document.querySelector("#Preview")
        //     // draw to canvas...
        //     var blob = new Blob([canvas], {type: "image/png"});
        //       console.log(canvas);
        //         FileSaver.saveAs(blob, "pretty image.png");
            

    }


     render(){
         return <div>
                        <button onClick={this.DownloadHandler}> Download Pdf </button> 
                </div>
     }

}

export default Download