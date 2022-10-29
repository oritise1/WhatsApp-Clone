import React from "react";
import "./App.css";
import AddFiles from "./components/addFile";
const App = () => {
  const name = [
                  'Ibrahim',
                  ' Kareem'
                ];
  const view = [
                  'Okay',
                  ' Good'
                ];
  
  return (
    <div className="App">
      <form>
        <p> Edit </p>
        <h1>Chats</h1>
        <input type="text" name="search" placeholder="Search.." />
        <br></br>
        <h4>Archived</h4>
        <hr></hr>
        <p className="list"> Broadcast Lists</p>
        <p className="new"> New Group</p>
        <hr></hr>
        <AddFiles name1={name} view1={view} />
      </form>
    </div>
  );
};

export default App;
