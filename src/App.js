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
        <div className="m-pop3">
          <div className="m-pop3-inner"></div> 
        </div>                                   
        <div className="m-pop"></div>
        <div className="m-pop2"></div>

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
  componentDidMount() {
    let nums = [1, 3, 5, 6]
    this.consoleLog()

    //搜索插入位置
    let result = this.searchInsert(nums, 5)
    console.log(result) //2
    result = this.searchInsert(nums, 2)
    console.log(result) //1   

    //验证回文串
    result = this.isPalindrome('A man, a plan, a canal: Panama')
    console.log(result) //true
    result = this.isPalindrome('race a car')
    console.log(result) //false    
    result = this.isPalindrome('  ')
    console.log(result) //false   

    this.merge()
  },
  handleChange1(selectedOption1) {
    this.setState({ selectedOption1 });
    console.log(`Option selected:`, selectedOption1);
  },
  handleChange2(selectedOption2) {
    this.setState({ selectedOption2 });
    console.log(`Option selected:`, selectedOption2);
  },
  handleChange3(selectedOption3) {
    this.setState({ selectedOption3 });
    console.log(`Option selected:`, selectedOption3);
  },
  consoleLog() {
    console.log(Date.prototype instanceof Object) //true
    console.log(Date instanceof Function) //true
    console.log(Date.__proto__ instanceof Object) //true
    console.log(Object instanceof Function) //true
  },
  searchInsert(nums, target) {
    let index = nums.indexOf(target)
    if (index >= 0) {
      return index
    } else {
      nums.push(target)
      nums.sort((a, b) => {
        return a - b
      })
      console.log(nums)
      return nums.indexOf(target)
    }
  },
  isPalindrome(s) {
    s = s.toLocaleLowerCase()
    s = s.replace(/[^0-9a-z]/ig, '')
    console.log(s)
    let len = s.length
    let result = true
    for (let i = 0; i < len; i++) {
      if (s.charAt(i) !== s.charAt(len - 1 - i)) {
        result = false
        break
      }
    }
    return result
  },
  merge() {
    function Node(element) {
      this.element = element
      this.next = null
    }
    let l1 = new Node('1')
    l1.next = new Node('2')
    l1.next.next = new Node('4')

    let l2 = new Node('1')
    l2.next = new Node('3')
    l2.next.next = new Node('4')
    
    let mergeTwoLists = function(l1, l2) {
      //遍历l2链表，将元素一一插入l1
      while (l2) {
        //先前的l1元素
        var prev = null;
        //当前的l1元素
        var cur = l1;
        //遍历l1链表，找到可插入l2元素的位置
        while (cur && l2.element > cur.element) {
          //记录先前的l1元素
          prev = cur;
          //记录当前的l1元素
          cur = cur.next;
        }
        //生成新的节点
        //注意：并没有利用l2已有的节点
        var newNode = new Node(l2.element);
        //插入新节点
        //新节点的next指向当前的l1元素
        newNode.next = cur;
        //如果是在l1链表中间插入
        //或者说新节点有前驱
        if (prev) {
          //先前元素的next指向新节点
          prev.next = newNode;
        } //如果新节点插在链表头部
        else {
          l1 = newNode;
        }
        l2 = l2.next;
      }
      //返回l1
      return l1;
    }
    let result = mergeTwoLists(l1, l2)
    console.log(result)
  }

})

export default App;