import React, {Component} from 'react';
import './All.css';



class All extends Component {

render(){
    let mydelete = this.props.delete;
    let cocher = this.props.cocher;
    let notes = this.props.notes;
    let mynotes = notes.map( k => 
       
          <li key={k.id}> <input type="checkbox" onClick={() => cocher(k.id)}/> <span>{k.note}</span>  <button onClick={() => mydelete(k.id)}>x</button> </li>
        
    );
    return (
      <div className="All bg-red-500">

             <ul> {mynotes}</ul>

      </div>
    );
  }
}

export default All;