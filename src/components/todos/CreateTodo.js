import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
       text: ''
    }
  }
  
  handleChange(event) {
    event.preventDefault()
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label> <br/>
            <input type="text"onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
