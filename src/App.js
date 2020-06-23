import React, {Component} from 'react';
import './App.css';
import Add from './Components/addItems/Add';
import All from './Components/All/All';


class App extends Component {
  
  state = {
     notes : [
       { note:"mohammed", checking:"true"},
       { note:"moha", checking:"true"},
       { note:"ahmed", checking:"true"}
     ]
  }

  add = (value) => {
    let mylist = this.state.notes;
    
    let myitem = { note:value, checking:"true"};
    mylist.push(myitem);
    this.setState({
      notes: mylist
    });
  }

  delete = (index) => {
    let notes = this.state.notes;
    notes.splice(index , 1);
    this.setState({
      notes 
    });

  }

  edit = (index, value) => {
    let {notes} = this.state;
    let mynote = notes[index];
    mynote['note'] = value;
    this.setState({
      notes
    })

  }


  render(){

    let {notes} = this.state;
    let myNotes = notes.map( (item , index) => {
      return <All note={item.note} key={index} index={index} delete={this.delete} edit={this.edit}/>
    });

    return (
      <div className="App">
        <div className="Content">
            <h1>todo</h1>
            <Add add={this.add}/>
            <ul>{myNotes}</ul>
            

            
            <footer>
              <span>items left</span>
                <ul>
                  <li>All</li>
                  <li>Active</li>
                  <li>Completed</li>
                </ul>
              <button>Clear Completed</button>
            </footer>

        </div>
      </div>
    );
  }
}

export default App;
