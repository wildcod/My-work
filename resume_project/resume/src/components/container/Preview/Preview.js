import React, {Component} from "react"
import Resume from '../Resume/Resume'
import SideBlog from '../SideBlog/SideBlog'
import './Preview.css'

class Preview extends Component {

    render() {
        return  <div id="Preview" className="container-fluid">
                     <div className="row">
                              <div >
                                    <SideBlog/>
                              </div>
                              <div className="col">
                                   <Resume State = {this.props.State}/>
                              </div>
                     </div>
                     
                     
              </div>
            

    }


}

export default Preview
