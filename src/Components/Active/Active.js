import React, {Component, Fragment} from 'react';

class Active extends Component {

    state = {
      isEdit : false,

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
      
      
      /* change style of note checked */
      let {checking} = this.props;
      let classList = "through";
      let classList1 = "myNote ";
      if(checking){classList1 = classList1 + classList} 
      

      let {changeChecking} = this.props;

      

      return (
         

          <li className="ourNotes">
             <input type="checkbox" checked={checking} onChange={() => changeChecking(index)}/>
             <span className={classList1} onDoubleClick={() => this.change()}>{note}</span> 
             <button onClick={() => mydelete(index)}>x</button> 
          </li> 
          );
    }

    renderForm = ()  => {
      let {note} = this.props;
      return (
        <form className="updateForm" onSubmit={this.beforEdit}>
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

export default Active;