import React from "react";
const AddFiles = (props) => {
  return (
    <div>
      <img src="photo.jpeg" alt="no file" />
      <h1> {props.mesage}</h1>
      <p>{props.title}</p>
    </div>
  );
};
export default AddFiles;
