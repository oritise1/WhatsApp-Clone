import React from "react";
import "./App.css";
import AddFiles from "./components/AddFile";
import ProfileImg from "./images/ibrahim.webp";
const App = () => {
  const name = [
    {
      mesage: "Ibrahim",
      title: " Kareem",
      image: ProfileImg,
    },
    // {
    //   mesage :'Ibrahim',
    //   title:' Kareem'
    // }
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
        <div id="message">
          {name.map((data) => {
            return (
              <AddFiles
                image={data.image}
                mesage={data.mesage}
                title={data.title}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default App;
