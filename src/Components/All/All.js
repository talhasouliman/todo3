import React, {Component, Fragment} from 'react';
import './All.css';



class All extends Component {

    state = {
      isEdit : false
    } 
    
    change = () => {
      let {isEdit} = this.state;
      this.setState({
        isEdit : !isEdit
      })
      console.log(isEdit)
    }

    beforEdit = (e) => {
      e.preventDefault();
      let {edit} = this.props;
      let {index} = this.props;
      edit(index, this.input.value);
      this.change();

    }

    renderNote = () => {  
      let mydelete = this.props.delete;
      let note = this.props.note;
      let index = this.props.index;

      return (

          <li>
             <input type="checkbox" />
             <span>{note}</span>
             <button onClick={() => this.change()}>Edit</button> 
             <button onClick={() => mydelete(index)}>x</button> 
          </li> 
          );
    }

    renderForm = ()  => {
      let {edit} = this.props;
      let {index} = this.props;
      let {note} = this.props;
      return (
        <form onSubmit={this.beforEdit}>
          <input type="text" defaultValue={note} ref={v => {this.input = v}}/>
          <button>Update</button>
        </form>
      )
    }

    render(){
      let {isEdit} = this.state;
      return (
        <Fragment>
        
                 {isEdit ? this.renderForm() : this.renderNote()}
      
        </Fragment>
      );
  }
}

export default All;