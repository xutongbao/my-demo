import React, { Component } from 'react';
import './index.css';

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selectValue: {}
    }
  }
  render() {
    let { active, selectValue } = this.state
    let { value, options, className } = this.props
    let menu = []
    for (let i = 0; i < options.length; i++) {
      menu.push(<li className={"m-select-list-item " + (selectValue.value === options[i].value ? 'active' : '')} key={i} 
        onClick={this.handleSelectItem.bind(this, options[i])}>{options[i].label} </li>)
    }
    let selectItem
    if (selectValue.value) {
      selectItem = selectValue
    } else if (value) {
      selectItem = value
      this.setState({
        selectValue: value
      })
    } else {
      selectItem = { value: '', label: 'Select...' }
    }
    return (
      <div className={"m-select-wrap " + className}>
        <div className="m-select-current js-select-current" onClick={this.handleClick.bind(this)}>{selectItem.label}</div>
        <div className={"m-select-list-wrap " +　(active ? 'active' : '')}>
          <ul className="m-select-list">
          {menu}
          </ul>
        </div>
      </div>
    );
  }
}

Object.assign(Select.prototype, {
  componentDidMount() {
    document.body.addEventListener('click', e => {
      if (e.target && e.target.className.indexOf('js-select-current') < 0) {
        this.setState({
          active: false
        })        
        return;
      }
      console.log('body');
    });
  },
  handleClick() {
    this.setState({
      active: !this.state.active
    })
  },
  handleSelectItem(item) {
    this.setState({
      selectValue: item,
      active: false
    })
    this.props.onChange(item)
  }
})

export default Select;