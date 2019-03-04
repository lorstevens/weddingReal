import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get('/api/todos')
      .then(res => {
        if (res.data) {
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  // deleteTodo = (id) => {

  //   axios.delete(`/api/todos/${id}`)
  //     .then(res => {
  //       if(res.data){
  //         this.getTodos()
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    let { todos } = this.state;

    return (
      <div id="rsvp" className="rsvp-container">
      <img  className="ivy" alt="ivy" src="/assets/ivy3.png"></img>
        <div className='container' id="rsvp-box">
          <div className='header-box'>
            <h3 className='headings'>RSVP</h3>
          </div>
           
          <Input getTodos={this.getTodos} />
          
        </div>
        
      </div>
    )
  }
}




export default Todo;

// <ListTodo todos={todos} deleteTodo={this.deleteTodo}/>