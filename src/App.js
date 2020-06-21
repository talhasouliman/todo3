import React, {Component} from 'react';
import './App.css';
import Add from './Components/addItems/Add';
import All from './Components/All/All';


class App extends Component {
  
  state = {
     notes : [
       {id:1, note:"mohammed", checking:"true"},
       {id:2, note:"moha", checking:"true"},
       {id:3, note:"ahmed", checking:"true"}
     ]
  }

  add = (value) => {
    let mylist = this.state.notes;
    let k = 1 + Math.random();
    let myitem = {id:k, note:value, checking:"true"};
    mylist.push(myitem);
    this.setState({
      notes: mylist
    });
  }

  delete = (id) => {
    let mylist = this.state.notes;
    let myarray = mylist.filter( k => k.id !== id);
    this.setState({
      notes : myarray
    });

  }


  render(){

    let {notes} = this.state;
    let myNotes = notes.map( item => {
      return <All note={item.note} key={item.id} id={item.id} delete={this.delete}/>
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
