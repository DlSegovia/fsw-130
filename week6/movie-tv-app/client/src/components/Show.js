import React, { useState } from "react";
import AddShowForm from "./ShowForm.js";

export default function Show(props) {
  const { title, genre, episodeNumber, _id } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="tvShow">
      {!editToggle ? (
        <>
          <h1>Title: {title}</h1>
          <p>Genre: {genre}</p>
          <p>Episode Number: {episodeNumber}</p>
          <button className="delete-btn" 
          onClick={() => props.deleteTvShow(_id)}>
            Delete
          </button>
          <button className="edit-btn" 
          onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <AddShowForm
            title={title}
            genre={genre}
            Episode Number={episodeNumber}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editTvShow}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}