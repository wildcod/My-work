import React ,{Component} from 'react'
import Person from './person/person'

class Persons extends Component {

    constructor(props){
        super(props)
        console.log('[Persons.js] inside constructor')
      }
    
      componentWillMount(){
        console.log('[Persons.js] inside componentWillMount')
      }
    
      componentDidMount(){
        console.log('[Persons.js] inside componentDidMount')
      }

      componentWillReceiveProps(nextProps){
          console.log('UPADTED Persons.js inside componentWillReceive', nextProps);
      }

      shouldComponentUpdate(nextProps , nextState){
          console.log('UPDATED Persons.js inside shouldComponentUpadte' , nextProps , nextState);
          return nextProps.person !== this.props.person || nextProps.clicked !== this.props.clicked;
      }

      componentWillUpdate(nextProps , nextState){
          console.log('UPADTED Persons.js inside componentWillUpdate' , nextProps , nextState);
      }

      componentDidUpdate(){
          console.log('UPADTED Persons.js inside componentDidDUpdate');
      }

    render() {

        console.log('[Persons.js] inside render')
        return this.props.person.map( (person , index) => {
            return <Person
            click= { () => this.props.clicked(index)} 
            name={person.name} 
            age= {person.age}
            key= {person.id} />
    }
)
}
} 

export default Persons;