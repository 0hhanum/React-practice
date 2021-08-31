import React from "react";
import PropTypes from "prop-types";

// component 는 대문자로 시작해야함. 규칙
const Test = ({ name, age }) => {
  return (
    <div>
      <h1> {name}  </h1>
      <h3> {age} </h3>
    </div>
  );
};

Test.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// const list = [
//   { id: 1, "name": "a", "age": 20 },
//   { id: 2, "name": "b", "age": 26 },
//   { id: 3, "name": "c", "age": 22 },
// ]

// function component
// function App() {
//   return (
//     <div className="App">
//       {list.map(element => <Test key={element.id} name={element.name} age={element.age} />)}
//     </div>
//   );
// };
/* react 내에서 모든 element 는 달라야함. 이를 구분하기 위해 key 값을 넣어줌. */

class App extends React.Component {
  state = {
    isLoading: true,
  };
  /*
  add = () => {
    // this.setState({ count: this.state.count + 1 })
    this.setState(current => ({ count: current.count + 1 }))
    // setState 호출 => react 는 새로운 state 와 함께 render 를 다시 진행
  };
  minus = () => {
    // this.setState({ count: this.state.count - 1 })
    this.setState(current => ({ count: current.count - 1 }))
  };
  */
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 600);
  };
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;

  };
};

export default App;
