import React, { useState } from "react";

export default function AddMovieForm(props) {
  const initInputs = { 
    title: props.title || "", 
    imgURL: props.imgURL || "", 
    discription: props.discription || "" 
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
    <form className='form' onSubmit={handleSubmit}>
      <input type='text'
        name='title'
        value={inputs.title}
        onChange={handleChange}
        placeholder='Title' />

      <input type='img'
        name='imgURl'
        value={inputs.imgURL}
        onChange={handleChange}
        placeholder='Img URL' />

      <input type='text'
        name='discription'
        value={inputs.discription}
        onChange={handleChange}
        placeholder='Discription' />
<br/>
      <button className='add-btn'>{props.btnText}</button>
    </form>
  )
}