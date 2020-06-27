import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './App.css';
import Add from './Components/addItems/Add';
import All from './Components/All/All';
import Active from './Components/Active/Active';
import Completed from './Components/Completed/Completed';
/*import down from './down.png';*/
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
    let lesnotes = notes.filter(k => k.checking === false);
    this.setState({
      notes : lesnotes
    })
  }

  checkAll = () => {
    let {notes} = this.state;
    let j = 0;

    for(let i=0; i<notes.length; i++){
      if( notes[i].checking === true){j++}
    }
    
    if( j === (notes.length)){
        for(let i=0; i<notes.length; i++){
          notes[i].checking = false;
        }
    } else{
      for(let i=0; i<notes.length; i++){
        notes[i].checking = true;
      }
    }
    this.setState({
      notes
    })
  }


  render(){

    let {notes} = this.state;

    let mesnotes = notes.filter(k => k.checking === false);


    let myNotes = notes.map( (item , index) => {
  
      return <Route path="/" exact key={index} render={(routeProps) => (<All {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
    });

    let myNotes1 = notes.map( (item , index) => {
     if(!item.checking){
      return <Route path="/active" exact key={index} render={(routeProps) => (<Active {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
      }
      
    });

    let myNotes2 = notes.map( (item , index) => {
      if(item.checking){
       return <Route path="/completed" exact key={index} render={(routeProps) => (<Completed {...routeProps} note={item.note} key={index} index={index} delete={this.delete} edit={this.edit} checking={item.checking} changeChecking={this.changeChecking}/>)}/>
       }
     });

    



    

    return (
      <div className="App">
        <div className="Content">
            <h1>todo</h1>
            <div className="fatherAdd">
                <span className="checkAll" onClick={this.checkAll}> <FontAwesomeIcon icon={faAngleDown} className="myicon" size="lg"   /> </span>
                <Add add={this.add}/>
            </div>
            <Router>
                
                 <ul className="listItem">{myNotes}</ul>
                 <ul className="listItem">{myNotes1}</ul>
                 <ul className="listItem">{myNotes2}</ul>
                                  
                 
            
                  <footer>
                      <span>{mesnotes.length + " "}items left</span>
                      <ul>
                        <li> <NavLink className="link" exact to="/"> All </NavLink></li>
                        <li> <NavLink className="link" to="/active"> Active </NavLink></li>
                        <li> <NavLink className="link" to="/completed"> Completed </NavLink></li>
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
