import React, { useState } from "react";

export default function AddTVShowForm(props) {
  const initInputs = { 
    title: props.title || "", 
    genre: props.genre || "", 
    episodeNumber: props.episodeNumber || "" 
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(initInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="genre"
        value={inputs.genre}
        onChange={handleChange}
        placeholder="Genre"
      />
      <input
        type="text"
        name="episode"
        value={inputs.episodeNumber}
        onChange={handleChange}
        placeholder="Episode Number"
      />
      <br /><br />
      <button>{props.btnText}</button>
    </form>
  );
}
      
      