import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table.js';

class InputForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      strings: [{string: '', sortedString: ''}],
      keyInput: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({keyInput: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state.keyInput,'this.state.keyInput');
    e.preventDefault();
    axios.post('/addItem', this.state.keyInput)
    .then( res => {
      let copy = this.state.strings.slice();
      copy.push({string: this.state.keyInput, sortedString: res});
      this.setState({
        strings: copy,
      })
      console.log(this.state.strings)
    })

  }

  render() {

    return (
      <div className="container">
        <div className="header">
        <form onSubmit={this.handleSubmit}>
        <label>
            <input type="text" value={this.state.keyInput} onChange={this.handleChange} placeholder="Enter String" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        </div>
      </div>
    );
  }
}

export default InputForm;
// {
//           this.state.strings.length > 0 ?
//           <Table stringPairs={this.state.strings}/>
//           :
//           <div></div>
//         }