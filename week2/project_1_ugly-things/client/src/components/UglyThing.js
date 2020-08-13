import React, { useState } from 'react';
import UglyThingForm from './UglyThingForm';

export default function UglyThing(props) {
  const { title, imgURL, description, _id } = props
  const [editToggle, setEditToggle] = useState(false)
  // debugger
  const imageURL = "http://192.168.0.11:3000/images/" + imgURL;
  return (
    <div className='uglyThing'>
      {!editToggle ? (
        <>
          <h1>Title: {title}</h1>
          <img src={imageURL} width="25%" height="25%" alt=" "></img>
          <p>Description: {description}</p>
          <button className='del-btn'
            onClick={() => props.deleteUglyThing(_id)}>
            Delete
      </button>
          <button className='edit-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
      </button>
        </>
      ) : (
          <>
            <UglyThingForm
              title={title}
              imgURL={imgURL}
              discription={description}
              _id={_id}
              btnText='Submit Edit'
              submit={props.editUglyThing} />

            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
              Close
        </button>
          </>
        )}
    </div>
  )
}