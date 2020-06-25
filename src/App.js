import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Link, NavLink} from 'react-router-dom';
import './App.css';
import Add from './Components/addItems/Add';
import All from './Components/All/All';
import Active from './Components/Active/Active';
import Completed from './Components/Completed/Completed';



class App extends Component {
  
  state = {
     notes : [
       { note:"mohammed", checking:false},
       { note:"moha", checking:false},
       { note:"ahmed", checking:false}
     ]
  }

  add = (value) => {
    let mylist = this.state.notes;
    let myitem = { note:value, checking:false};
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

  changeChecking = (k) => {
      let {notes} = this.state;
      let note = notes[k];
      note.checking = !(note.checking);
      this.setState({
        notes
      })
  }

  clearCompleted = () => {
    let {notes} = this.state;
    let lesnotes = notes.filter(k => k.checking == false);
    this.setState({
      notes : lesnotes
    })
  }

  checkAll = () => {
    let {notes} = this.state;
    for(let i=0; i<notes.length; i++){
      notes[i].checking = !notes[i].checking;
    }
    this.setState({
      notes
    })
  }


  render(){

    let {notes} = this.state;

    let mesnotes = notes.filter(k => k.checking == false);


    let myNotes = notes.map( (item , index) => {
      /* return <All note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>
      */
      return <Route path="/" exact render={(routeProps) => (<All {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
    });

    let myNotes1 = notes.map( (item , index) => {
     if(!item.checking){
      return <Route path="/active" exact render={(routeProps) => (<Active {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
      }
    });

    let myNotes2 = notes.map( (item , index) => {
      if(item.checking){
       return <Route path="/completed" exact render={(routeProps) => (<Completed {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
       }
     });

    



    

    return (
      <div className="App">
        <div className="Content">
            <h1>todo</h1>
            <span onClick={this.checkAll}>v</span>
            <Add add={this.add}/>
            <Router>
                
                 <ul>{myNotes}</ul>
                 <ul>{myNotes1}</ul>
                 <ul>{myNotes2}</ul>
                                  
                 
            
                  <footer>
                      <span>{mesnotes.length}items left</span>
                      <ul>
                        <li> <NavLink to="/"> All </NavLink></li>
                        <li> <NavLink to="/active"> Active </NavLink></li>
                        <li> <NavLink to="/completed"> Completed </NavLink></li>
                      </ul>
                    <button onClick={this.clearCompleted}>Clear Completed</button>
                  </footer>

            </Router>

        </div>
      </div>
    );
  }
}

export default App;
