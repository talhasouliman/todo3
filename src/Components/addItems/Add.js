import React, {Component} from 'react';

class Add extends Component {

state = {
    note : ""
        
}

handleChange = (value) => {
     this.setState({
         note : value
     })
 }

handleSubmit = (e) => {
     e.preventDefault();
     this.props.add(this.state.note);
     this.setState({
         note : ""
     });

     console.log(this.state.note);

}

render(){
      
    return (
      <div className="Add">
          <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Enter some notes" onChange={(e) => this.handleChange(e.target.value)} value={this.state.note} />
              <input type="submit" value="Add"/>
          </form>
      </div>
    );
  }
}

export default Add;