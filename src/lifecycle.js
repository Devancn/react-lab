import React from 'react'

// 初始时生命周期执行顺序
// constructor -> componentWillMount -> render -> componentDidMount
class LifeCycle extends React.Component{
  constructor(props) {
    console.log("进入constructor");
    super(props);
    this.state = {text: "子组件的文本"}
  }
  componentWillMount() {
    console.log(arguments,'componentWillMount方法执行');
  }
  componentDidMount() {
    console.log(arguments,'componentDidMount方法执行');
  }
  componentWillReceiveProps(nextProps) {
    console.log(arguments,'componentWillReceiveProps方法执行');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(arguments,"shouldComponentUpdate方法执行");
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(arguments,"componentWillUpdate方法执行");
  }
  componentWillUnmount() {
    console.log(arguments,'子组件的componentWillUnmount方法执行');
  }
  changeText = () => {
    this.setState({
      text: "修改后的子组件文本"
    })
  }
  render() {
    console.log(arguments,"render方法执行")
    return (
      <div className="container">
        <button onClick={this.changeText} className="change-text">修改子组件文本内容</button>
        <p className="state-content">{this.state.text}</p>
        <p className="props-content">{this.props.text}</p>
      </div>
    );
  }
}

export default class LifeCycleContainer extends React.Component{
  state = {
    text: "父组件文本",
    hideChild: false
  }
  changeText = () => {
    this.setState({
      text: "修改后的父组件文本"
    })
  }
  hideChild = () => {
    this.setState({
      hideChild: true
    })
  }
  render() {
    return (
      <div className="father-container">
        <button onClick={this.changeText} className="change-text">修改父组件文本内容</button>
        <button onClick={this.hideChild} className="hide-child">隐藏子组件</button>
        {this.state.hideChild ? null : <LifeCycle text={this.state.text}/>}
      </div>
    )
  }
}