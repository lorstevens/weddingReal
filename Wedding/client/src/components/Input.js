import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    action: "",
    firstName: "",
    lastName: ""
  }

  addTodo = () => {
    const task = {action: this.state.action, firstName: this.state.firstName, lastName: this.state.lastName}

    if(task.action && task.action.length > 0){
      axios.post('/api/todos', task)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({action: "", firstName: "", lastName: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
};

  render() {
    let { action, firstName, lastName } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={firstName} name="firstName" />
        <input type="text" onChange={this.handleChange} value={lastName} name="lastName" />
        <input type="text" onChange={this.handleChange} value={action} name="action" />
        <button onClick={this.addTodo}>RSVP</button>
      </div>
    )
  }
}

export default Input