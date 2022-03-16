import './App.css';
import React from 'react';

const ExampleA = Symbol('Example 1')
const ExampleB = Symbol('Example 2')

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page:ExampleA
    }
  }
  render(){
    if(this.state.page === ExampleA){
     return ( <div className='App'>
        <h1>Example 1</h1>
        <button onClick={this.onButton1Clicked}>show Example 2</button>
      </div>
      )
    }else {
      return (
      <div className='App'>
        <h1>Example 2</h1>
        <button onClick={this.onButton2Clicked.bind(this)}>show Example 1</button>
      </div>
      )
    }
  }

  onButton1Clicked = ()=>{
    console.log(this.state.page);
    this.setState({page:ExampleB})
  }
  onButton2Clicked(){
    console.log(this.state.page);
    this.setState({page:ExampleA})
  }
}
export default App;

/**
 * Reference:
 * https://blog.csdn.net/zhumizhumi/article/details/108991499
 * https://blog.csdn.net/smouns_/article/details/121760036
 */
