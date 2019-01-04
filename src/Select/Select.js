import React, { Component } from 'react';
import './index.css';

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selectValue: null
    }
  } 	
  render() {
  	let { active, selectValue } = this.state
  	let { value, options } = this.props	
  	let menu = []
  	for (let i = 0; i < options.length; i++) {
  		menu.push(<li className="m-select-list-item" key={i} onClick={this.handleSelectItem.bind(this, options[i])}>{options[i].label} </li>)
  	}
  	let selectItem
  	if (selectValue) {
  		selectItem = selectValue
  	} else if (value) {
  		selectItem = value
  	} else {
  		selectItem = {value: '', label: 'Select...'}
  	}
    return (
      <div className="m-select-wrap">
      	<div className="m-select-current" onClick={this.handleClick.bind(this)}>{selectItem.label}</div>
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
