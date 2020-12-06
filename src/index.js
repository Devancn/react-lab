import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleContainer from './lifecycle16'

// class Parent {
//   aa = () => {
//     console.log(123)
//   }
//   setState() {
//     console.log(123)
//   }
// }
// class Child extends Parent {
//   b() {
//     return 1;
//   }
// }
// var c = new Child();
// console.log(c)
class App extends React.Component {
  render () {
    return (
      <div>
        this this Ap
      </div>
    )
  }
}
ReactDOM.render(
    <LifeCycleContainer ><App></App></LifeCycleContainer>,
  document.getElementById('root')
);