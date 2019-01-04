import React, { Component } from 'react';
import MySelect from './Select/Select.js'
import Select from 'react-select';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //selectedOption: { value: 'chocolate', label: 'Chocolate' },
      selectedOption2: { value: 'chocolate', label: 'Chocolate' }
    }
  }  
  handleChange(selectedOption) {
    // this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  }  
  render() {
    let { selectedOption, selectedOption2 } = this.state
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];   
    const options2 = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];       
    return (
      <div className="m-wrap">
        <Select
          className="m-select"
          value={selectedOption}
          onChange={this.handleChange.bind(this)}
          options={options}
        />
        <MySelect
          className="m-select"
          value={selectedOption}
          onChange={this.handleChange.bind(this)}
          options={options}
        />   
        <MySelect
          className="m-select"
          value={selectedOption2}
          onChange={this.handleChange.bind(this)}
          options={options2}
        />               
        {/*<div className="m-pop"></div>*/}
      </div>
    );
  }
}

export default App;
