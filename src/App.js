import React from "react";
import "./App.css";
import AddFiles from "./components/Add File";
const App = () => {
  const name = [{
    mesage :'Ibrahim',
    title:' Kareem'
  },
  {
    mesage :'Ibrahim',
    title:' Kareem'
  }
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
        {name.map(data => {
          return (
            <AddFiles
              mesage={data.mesage}
              title={data.title}
            />
          )
        })}
      </form>
    </div>
  );
};

export default App;
