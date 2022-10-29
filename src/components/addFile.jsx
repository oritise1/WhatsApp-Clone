import React from 'react'
import  "./photo.jpeg"
const AddFiles = (props) => {
  return (
    <div>
        <img src="photo.jpeg" alt="no file" /> 
        {/* {props.msName.map((name1) => { */}
            {/* return ( */}
              <h1> {props.name1}</h1>
            {/* ); */}
          {/* })} */}
        {/* {props.msView.map((view1) => { */}
            {/* return ( */}
                <p>{props.view1}</p>
            {/* ); */}
          {/* })} */}
    </div>
  )
}
export default AddFiles