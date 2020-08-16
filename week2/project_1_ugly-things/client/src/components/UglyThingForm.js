import React, { useState } from "react";

export default function AddUglyThingForm(props) {
  const initInputs = { 
    title: props.title || "", 
    imgURL: props.imgURL || "", 
    description: props.description || "" 
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
        name='imgURL'
        value={inputs.imgURL}
        onChange={handleChange}
        placeholder='Img URL' />
      

      <input type='text'
        name='description'
        value={inputs.description}
        onChange={handleChange}
        placeholder='Description' />
       
<br/>
      <button className='add-btn'>{props.btnText}</button>
    </form>
  )
}