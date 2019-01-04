import React, { Component } from 'react';
import MySelect from './Select/Select.js'
import Select from 'react-select';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption1: null,
      selectedOption2: null,
      selectedOption3: { value: 'react', label: 'React' }
    }
  }  
  render() {
    let { selectedOption1, selectedOption2, selectedOption3 } = this.state
    const options1 = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ];   
    const options2 = [
      { value: 'js', label: 'javascript' },
      { value: 'css', label: 'CSS' },
      { value: 'html', label: 'HTML' }
    ];    
    const options3 = [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'nextjs', label: 'Nextjs' }
    ];       
    return (
      <div className="m-wrap">   
        {/*<div className="m-pop3">
          <div className="m-pop3-inner"></div> 
        </div>                   
        <div className="m-pop"></div>
        <div className="m-pop2"></div>*/}
        <Select
          className="m-select"
          value={selectedOption1}
          onChange={this.handleChange1.bind(this)}
          options={options1}
        />
        <MySelect
          className="m-select"
          value={selectedOption2}
          onChange={this.handleChange2.bind(this)}
          options={options2}
        />   
        <MySelect
          className="m-select"
          value={selectedOption3}
          onChange={this.handleChange3.bind(this)}
          options={options3}
        />         
      </div>
    );
  }
}

Object.assign(App.prototype, {
  handleChange1(selectedOption1) {
    this.setState({ selectedOption1 });
    console.log(`Option selected:`, selectedOption1);
  },
  handleChange2(selectedOption2) {
    this.setState({ selectedOption2});
    console.log(`Option selected:`, selectedOption2);
  },
  handleChange3(selectedOption3) {
    this.setState({ selectedOption3 });
    console.log(`Option selected:`, selectedOption3);
  }     
})

export default App;
