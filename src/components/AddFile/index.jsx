import React from "react";

const AddFiles = (props) => {
  return (
    <div id="meessage">
      <img src="props.image" alt="no img" />
      <h1 > {props.mesage}</h1>
      <p>{props.title}</p>
    </div>
  );
};
export default AddFiles;
