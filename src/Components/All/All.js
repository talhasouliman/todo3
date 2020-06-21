import React, {Component, Fragment} from 'react';
import './All.css';



class All extends Component {


    

    renderNote = () => {  
      let mydelete = this.props.delete;
      let note = this.props.note;
      let id = this.props.id;

      return (

          <li>
             <input type="checkbox" />
             <span>{note}</span> 
             <button onClick={() => mydelete(id)}>x</button> 
          </li> 
          );
    }

    render(){
      return (
        <Fragment>

              
                 {this.renderNote()}
              

        </Fragment>
      );
  }
}

export default All;