import React from "react";

// component 는 대문자로 시작해야함. 규칙

const Test = ({ name, age }) => {
  return (
    <div>
      <h1> {name}  </h1>
      <span> {age} </span>
    </div>
  );
};

const list = [
  { "name": "a", "age": 20 },
  { "name": "b", "age": 26 },
  { "name": "c", "age": 22 },
]

function App() {
  return (
    <div className="App">
      {list.map(element => <Test name={element.name} age={element.age} />)}
    </div>
  );
}

export default App;
