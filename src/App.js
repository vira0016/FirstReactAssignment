import React, { Component } from 'react';

import Cheese from './Cheese';
import CheeseList from './CheeseList';
import FormAdd from './FormAdd';

import './App.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            nation: "",
            chesses:[
                
                    {id: 123, name: 'Swees', nation: 'Switzerland'},
                
            ]
   
        };
                 this.name= React.createRef();
            this.nation= React.createRef();
    
//        this.addItem = this.addItem.bind(this);
    }
    
    
       deleteCheese = (e) => {
       let ch = this.state.chesses; 
       ch.splice(e);
       this.setState({chesses:ch});
       
   }  
     
      
    
    
        addItem = (ch) => {
            console.log('add', ch);
            let cheeses = this.state.chesses;
            
            cheeses.push(ch);
            
            console.log('new array')
            console.log(cheeses);
            
            this.setState({
                chesses: cheeses
            })
            

            
         
            
        }

    
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="heading"> Cheeses of the world</h1>
    
          

      
        <FormAdd chesses={this.state.chesses} addnewItem={this.addItem} />
        
            <CheeseList entries={this.state.chesses}
        delEvent={this.deleteCheese} changeCheeseName ={this.changeCheeseName}/>                                                
      </header>
       
      
      </div>
    );
  }
}

export default App;
    