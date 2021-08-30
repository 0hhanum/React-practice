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

const list = [
  { id: 1, "name": "a", "age": 20 },
  { id: 2, "name": "b", "age": 26 },
  { id: 3, "name": "c", "age": 22 },
]

function App() {
  return (
    <div className="App">
      {list.map(element => <Test key={element.id} name={element.name} age={element.age} />)}
    </div>
  );
};
/* react 내에서 모든 element 는 달라야함. 이를 구분하기 위해 key 값을 넣어줌. */

export default App;
