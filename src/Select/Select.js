import React, { Component } from 'react';
import './index.css';

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.getID(),
      active: false,
      selectValue: null
    }
  }
  render() {
    let { id, active, selectValue } = this.state
    let { options, className } = this.props
    let listArr = []
    for (let i = 0; i < options.length; i++) {
      let active = ''
      if (selectValue && selectValue.value === options[i].value) {
        active = 'active'
      }
      listArr.push(<li className={"m-select-list-item " + active} key={options[i].value} 
        onClick={this.handleSelectItem.bind(this, options[i])}>{options[i].label} </li>)
    }
    let selectItem
    if (selectValue && selectValue.value) {
      selectItem = selectValue
    } else {
      selectItem = { value: '', label: 'Select...' }
    }
    return (
      <div className={"m-select-wrap " + className} id={id}>
        <div className="m-select-current" onClick={this.handleClick.bind(this)}>
          {selectItem.label}
          <span className={"m-select-icon " + (active ? 'active' : '')}>▲</span>
        </div>
        <div className={"m-select-list-wrap " +　(active ? 'active' : '')}>
          <ul className="m-select-list">{listArr}</ul>
        </div>
      </div>
    );
  }
}

Object.assign(Select.prototype, {
  componentWillReceiveProps(nexeProps) {
    this.setState({
      selectValue: nexeProps.value
    })
  },
  componentDidMount() {
    let { value } = this.props
    document.body.addEventListener('click', e => {
      this.setState({
        active: false
      })
    });
    if (value) {
      this.setState({
        selectValue: value
      })
    }
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
  },
  getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  },
})

export default Select;