import React, {Component} from 'react';
import Cheese from './Cheese';
import './CheeseList.css';

export default class CheeseList extends Component{
    constructor(){
        super();
        this.state = {
            };
    }
    
   deleteCheese = (index, e) => {
       console.log(index);
//       const chesses = Object.assign([], this.props.chesses);
//       chesses.splice(index, 1);
//       this.setState({chesses:chesses});
       this.props.delEvent(index);
       
   } 
   
   changeCheeseName = (id, e) => {
//        console.log(id)
//        console.log(e)
//       const index = this.state.chesses.findIndex((cheese)=>{
//           return cheese.id === id
//       });
//       
//       const cheese = Object.assign({}, this.state.chesses[index]);
//       console.log(cheese)
//       
//       cheese.name = e.target.value;
//       
//       const chesses =  Object.assign([],this.state.chesses);
//       
//       chesses[index] = cheese;
//       
//       this.setState({chesses:chesses});
       this.props.changeCheeseName(id);
       
   }
   
    changeNationName = (id, e) => {
       
        console.log(id)
        console.log(e)
       const index = this.state.chesses.findIndex((nation)=>{
           return nation.id === id
       });
       
       const nation = Object.assign({}, this.state.chesses[index]);
              console.log(nation)

       nation.nation = e.target.value;
       
       const chesses =  Object.assign([],this.state.chesses);
       
       chesses[index] = chesses.nation;
       
       this.setState({chesses:chesses});
       
   }
    
    
    
    
    
     render(){
         return(
             <div className="App">
             
             <h4> Cheese List</h4>
             <ul>
             {
             this.props.entries.map( (cheese, index)=>{
             return(
             <Cheese
                 
                 
                 nation ={cheese.nation}
                 key={cheese.id}
                 delEvent={this.deleteCheese.bind(this, index)}
                ch={this.changeNationName.bind(this, cheese.id)}
        
             changeEvent={this.changeCheeseName.bind(this, cheese.id)}
             >{cheese.name}</Cheese>
         )
         })
             }
             </ul>
             </div>
             );
         
     }
}