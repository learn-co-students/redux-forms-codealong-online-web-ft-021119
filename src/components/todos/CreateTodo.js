import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
	constructor() {
  super();
  this.state = {
    text: '',
  };
}
 
// handleChange(event) {
//   this.setState({
//     text: event.target.value
//   });
// };
//this function would require to write diff onchange method
//onChange={(event) => this.handleChange(event)} 

handleChange = event => {
    this.setState({
        text: event.target.value
    });
};

handleSubmit = event => {
  event.preventDefault();
  this.props.addTodo(this.state)
}
  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
         {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    };
};

export default connect(null, mapDispatchToProps)(CreateTodo);


// In this component, we're not currently concerned with writing a mapStateToProps 
// function (the first argument passed to connect) as this component doesn't need any state. 
// Since we only need to dispatch an action here and not getting information from our store, 
// we can use null instead of mapStateToProps as the first argument.


//ALTERNATIVE


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
 
// class CreateTodo extends Component {
//     state = {
//         text: ''
//     };
 
//     handleChange = event => {
//         this.setState({
//             text: event.target.value
//         });
//     };
 
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
//     };
 
//     render() {
//         return (
//             <div>
//                 <form onSubmit={event => this.handleSubmit(event)}>
//                     <p>
//                         <label>add todo</label>
//                         <input
//                             type="text"
//                             onChange={event => this.handleChange(event)}
//                             value={this.state.text}
//                         />
//                     </p>
//                     <input type="submit" />
//                 </form>
//             </div>
//         );
//     }
// }
 
// export default connect()(CreateTodo);
