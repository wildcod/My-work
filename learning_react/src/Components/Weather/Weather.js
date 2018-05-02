import React, {Component} from 'react'
import axios from 'axios'


class Weather extends Component {

    state = {
         temp : null,
         pressure : null,
         humidity : null,
         mintemp : null,
         maxtemp : null
    }

    GetDataHandler =() => {
            axios.get('http://localhost:1234/data')
               .then((res) => {
                   console.log(res)
                   this.setState({
                       temp : res.data.main.temp,
                       pressure : res.data.main.pressure,
                       humidity : res.data.main.humidity,
                       mintemp : res.data.main.temp_min,
                       maxtemp : res.data.main.temp_max
                   })
               })  
        }

    render(){
        return (
             <div>
                 <p> Weather Content</p>
                 <button onClick={this.GetDataHandler} >Get Data</button>
                 <br/>

                 <p>{this.state.temp}</p>
                 <p>{this.state.pressure}</p>
                 <p>{this.state.humidity}</p>
                 <p>{this.state.mintemp}</p>
                 <p>{this.state.maxtemp}</p>
            </div>
        );
    }
}

export default Weather