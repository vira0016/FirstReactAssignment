import React, {Component} from 'react';
import './Cheese.css';




    
//    constructor(props){
//        super(props);
//        this.state = {
//            id: props.cheese.id,
//            name: props.cheese.name,
//            nation: props.cheese.nation
//        }
//    }
//    
//  
//    
//    render(){
//        
//    return(
        
        const cheese = (props) => {
    return(<li>
        <span>name: {props.children}, nation: {props.nation} </span>
           
           
           <input onChange={props.changeEvent} value={props.children}/>
            <input onChange={props.ch} value={props.nation}/>
        <button onClick={props.delEvent}>Delete</button>
        </li>
          )
    }
    
export default cheese;
