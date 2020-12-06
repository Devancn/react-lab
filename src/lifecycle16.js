import React from "react";
<<<<<<< HEAD
let props;
=======

/**
 * 挂载阶段生命周期函数执行顺序
 * constructor -> getDerivedStateFromProps -> render -> componentDidMount
 */

 /**
  * 更新阶段生命周期函数执行顺序
  * getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
  */

  /**
   * 卸载阶段生命周期函数执行顺序 componentWillUnmount
   */
>>>>>>> e78fcae8f7a8fe9604dd6006cd9d2739c30793a4
class LifeCycle extends React.Component {
  // 初始化调用
  constructor(props) {
    console.log("进入constructor");
    super(props);
    this.state = { text: "子组件的文本", ref:  React.createRef(),count: 0 };
  }
  // 初始化/更新时调用(16.3之前只有父组件更新才会执行该函数)
  static getDerivedStateFromProps(props, state) {
    console.log(arguments, "getDerivedStateFromProps方法执行");
    return {
      fatherText: props.text,
    };
  }
  // 初始化渲染时调用
  componentDidMount() {
    console.log("componentDidMount方法执行");
    this.state.ref.current.addEventListener('click',() => {
      this.setState({count: this.state.count + 1})
      this.setState({count: this.state.count + 2})
    })
    console.log(this.state, 'this.state.ref.current')
  }
  // 组件更新时调用
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate方法执行");
    return true;
  }
  // 组件更新时调用
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate方法执行");
    return "Devan";
  }
  // 组件更新后调用
  componentDidUpdate(nextProps, nextState, valueFromSnapshot) {
    console.log(arguments, "componentDidUpdate方法执行");
  }
  // 组件卸载时调用
  componentWillUnmount() {
    console.log("子组件的componentWillUnmount方法执行");
  }
  // 点击按钮，修改子组件文本内容
  changeText = () => {
    this.setState({
      text: "修改后的子组件文本",
    });
    this.setState({
      text: "修改后的子组件文本2",
    });
    this.setState({
      text: "修改后的子组件文本3",
    });
  };
  render() {
    if(props) {
      console.log(props === this.props, 'props');
    } else {
      props = this.props;
    }
    console.log(this.props, 'props');
    console.log(this.state, 'state')
    console.log("LifeCycle render方法执行");
    return (
      <div className="container">
        <button ref={this.state.ref}>修改子组件文本内容</button>
        <p>{this.state.text}</p>
        <p>{this.state.fatherText}</p>
      </div>
    );
  }
}


class LifeCycleContainer extends React.Component {
 
  state = {
    text: "父组件的文本",
    showChild: true,
  };

  changeText = () => {
    this.setState({ text: "修改后的父组件文本" });
  };

  hideChild = () => {
    this.setState({
      showChild: false,
    });
  };
  render() {
    console.log(this.props, 'this.props')
    return (
      <div>
        <button onClick={this.changeText}>修改父组件文本内容</button>
        <button onClick={this.hideChild}>隐藏子组件</button>
        {this.props.children}
        {this.state.showChild && <LifeCycle text={this.state.text} />}
      </div>
    );
  }
}

export default LifeCycleContainer;