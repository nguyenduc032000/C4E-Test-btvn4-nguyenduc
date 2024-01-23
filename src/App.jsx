import React from 'react'

const App = () => {let userData = {};

function enterName() {
    let name = prompt("Enter your name:");
    userData.name = name;
    console.log("Name: " + userData.name);
}
function enterAge() {
    let age = prompt("Enter your age:");
    userData.age = age;
    userData.createdAt = new Date(); 
    console.log("Name: " + userData.name + ", Age: " + userData.age + ", Created At: " + userData.createdAt);
}
function handleClick() {
    enterName();
    enterAge();
}
handleClick();

  return (
    <div>bài tập số 3</div>
  )
}

export default App;