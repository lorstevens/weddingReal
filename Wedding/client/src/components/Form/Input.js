import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css'


class Input extends Component {

  state = {
    action: "",
    firstName: "",
    lastName: "",
    rsvp: "",
    guest: ""
  }

  addTodo = () => {
    const task = { firstName: this.state.firstName, lastName: this.state.lastName, rsvp: this.state.rsvp, guest: this.state.guest }

    if (task && task.firstName.length > 0 && task.lastName.length > 0) {

      axios.post('/api/todos', task)
        .then(res => {
          if (res.data) {
            this.props.getTodos();
            console.log('rhhhmmms', this.props.getTodos())
            this.setState({ action: "", firstName: "", lastName: "", rsvp: "", guest: "" })
          }
        })
        .catch(err => console.log(err))
    } else {
      alert('input field required')
    }
  }

  handleChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleRadioChange = (event) => {
    this.setState({
      rsvp: event.target.value
    });
  };

  render() {
    let { action, firstName, lastName, guest } = this.state;
    return (

      <div className="mainContainer">

        <div className="containerBox" id="secondBox">
          <div>
            <div>

            <h5 className='headings'>we can't wait to see everyone! We can't thank our families and friends enough for their help. The love and happiness is palpable. </h5>

            </div>
          </div>
        </div>

        <div className="containerBox" id="firstBox">
          <div className="boxBox">
            <div className="box ">
            <h3 className='headings'>RSVP</h3>
              <div className="row">
                <div class="col s12">
                  <h6>Your Name:</h6>
                </div>
                <div class="col s12 m6">
                  <input type="text" onChange={this.handleChange} value={firstName} name="firstName" placeholder="First Name" />
                </div>
                <div class="col s12 m6">
                  <input type="text" onChange={this.handleChange} value={lastName} name="lastName" placeholder="Last Name" />
                </div>


                <div class="col s12">
                  <h6>Will we see you on July 13th?</h6>

                  <p>
                    <label>
                      <input name="yes" type="radio" checked={this.state.rsvp === 'yes'} value="yes" onChange={this.handleRadioChange} />
                      <span>Yes, can't wait!</span>
                    </label>
                  </p>

                  <p>
                    <label>
                      <input name="no" type="radio" checked={this.state.rsvp === 'no'} value="no" onChange={this.handleRadioChange} />
                      <span>Unfortunately can't make it.</span>
                    </label>
                  </p>
                </div>


                <div class="col s12">

                  <h6>How many guests?</h6>

                  <input type="number" onChange={this.handleChange} value={guest} name="guest" placeholder='Guest Count (including yourself)' />

                  {firstName.length && lastName.length > 0 ?
                    <Link to="/success" >
                      <button className="rsvp-button" onClick={this.addTodo}>RSVP</button>
                    </Link> : <button className="rsvp-button" onClick={this.addTodo}>RSVP</button>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Input



// <div className="row">
// <div class="col s12">
// <h6>Your Name:</h6>
// </div>
// <div class="col s12 m6">
//     <input type="text" onChange={this.handleChange} value={firstName} name="firstName" placeholder="First Name" />
//   </div>
//   <div class="col s12 m6">
//     <input type="text" onChange={this.handleChange} value={lastName} name="lastName" placeholder="Last Name" />
//   </div>


//   <div class="col s12">
//     <h6>Will we see you on July 13th?</h6>

//     <p>
//       <label>
//         <input name="yes" type="radio" checked={this.state.rsvp === 'yes'} value="yes" onChange={this.handleRadioChange} />
//         <span>Yes, can't wait!</span>
//       </label>
//     </p>

//     <p>
//       <label>
//         <input name="no" type="radio" checked={this.state.rsvp === 'no'} value="no" onChange={this.handleRadioChange} />
//         <span>Unfortunately can't make it.</span>
//       </label>
//     </p>
//     </div>


//     <div class="col s12">

//   <h6>How many guests?</h6>

//   <input type="number" onChange={this.handleChange} value={guest} name="guest" placeholder='Guest Count (including yourself)' />

//   {firstName.length && lastName.length > 0 ? 
//     <Link to="/success" >
//       <button className="rsvp-button" onClick={this.addTodo}>RSVP</button>
//     </Link> : <button className="rsvp-button" onClick={this.addTodo}>RSVP</button>
// }
//   </div>
// </div>