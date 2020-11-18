import React from 'react'

/**
 * Mounting阶段： 组件的初始化渲染（挂载）
 * 挂载过程在组件的一生中只会发生一次，在这个过程中组件被初始化然后被渲染成真实DOM，完成首次渲染
 * constructor -> componentWillMount -> render -> componentDidMount
 */

 /**
  * Updating阶段：组件的更新
  * 组件的更新分为两种：
  * 1. 由父组件更新触发
  * 2. 组件自身调用自己的setState触发
  * 如果是第一种情况，生命周期执行顺序为：
  * componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render
  * 如果是第二种情况，生命周期执行顺序为：
  * shouldComponentUpdate -> componentWillUpdate -> render
  * 总结：
  * 值得注意一点componentWillReceiveProps生命周期函数只有父组件有更新哪怕没有传递给子组件的props也会触发子组件的该生命周期函数
  */

  /**
   * shouldComponentUpdate生命周期函数补充：
   * React组件会根据该函数的返回值来决定是否执行之后的生命周期，
   * 所以返回false的情况下render函数不会被执行，可以用来做一些性能优化
   */


   /**
    * Unmounting 阶段: 组件卸载
    * 组件卸载时机有两个：
    * 1. 组件在父组件中被移除了
    * 2. 本次render时发现与上次的render的key属性的值不同或者type不同
    * 涉及到的生命周期函数只有componentWillUnmount
    */
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
  changeOwnText = ()=> {
    this.setState({
      ownText: "修改后的父组件自身文本"
    })
  }
  render() {
    return (
      <div className="father-container">
        <button className="change-text" onClick={this.changeOwnText}>修改父组件自身文本内容</button>
        <button onClick={this.changeText} className="change-text">修改父组件文本内容</button>
        <button onClick={this.hideChild} className="hide-child">隐藏子组件</button>
        {this.state.hideChild ? null : <LifeCycle text={this.state.text}/>}
      </div>
    )
  }
}