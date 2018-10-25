import React, { Component } from 'react';



class FormAdd extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            nation: ""
        };
//                 this.name= React.createRef();
//            this.nation= React.createRef();
    
//        this.addItem = this.addItem.bind(this);
    }
        addItem = (ev) => {
            ev.preventDefault();
            console.log(this)
//            const chesses = this.refs.name.value;
//            const newCheese = this.refs.nation.value;
            
            let cheese={
                id: Date.now(),
                name:this.state.name,
                nation:this.state.nation
            }
            //let chesses = this.state.chesses;
            //chesses.push(cheese)
           //this.props.chesses.push(cheese)
//            this.setState({
//                chesses: cheese
//            })
            
            this.props.addnewItem(cheese);
            
        }

    
    onchangename = (ev) => {
        let n = ev.target.value
                console.log(this); 

        //this.state.name=n;
        this.setState({name:n})
    }
    
     onchangenation = (ev) =>{
        let n = ev.target.value
        console.log(n); 
        //this.state.nation= n;
         this.setState({nation:n});
    }
 
  render() {
    return (
     
    
          
        
        
        <form onSubmit={this.addItem}>
        <h4 className="addnewcheese"> Add New Cheese</h4>
        
        <label htmlFor={this.name}></label>
        
            <input type = "text"  onChange={this.onchangename}  />
            <label htmlFor={this.nation}></label>
            <input type = "text"  onChange={this.onchangenation} />

            <button type="submit" onClick={this.addItem} className="btn btn-primary" value="Save"> Add </button>
    </form>
      
     
    );
  }
}

export default FormAdd;
    