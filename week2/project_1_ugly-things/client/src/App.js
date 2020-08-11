import React, { useState, useEffect } from "react";
import axios from "axios";
import UglyThing from "./components/UglyThing.js";
import UglyThingForm from "./components/UglyThingForm.js";

export default function App() {
  const [uglyThings, setUglyThings] = useState([])

  function getUglyThings() {
    axios.get("http://localhost:7000/uglyThing")
      .then(res => setUglyThings(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addUglyThing(newUglyThing) {
    axios.post("http://localhost:7000/uglyThing", newUglyThing)
      .then(res => {
        setUglyThings(prevUglyThings => [...prevUglyThings, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteUglyThing(uglyThingId) {
    axios.delete(`http://localhost:7000/uglyThing${UglyThing}`)
      .then(res => {
        setUglyThings(prevUglyThings =>
          prevUglyThings.filter(uglyThing => UglyThing._id !== uglyThingId)
        )
      })
      .catch(err => console.log(err))
  }

  function editUglyThing(updates, UglyThingId) {
    axios.put(`http://localhost:7000/UglyThing${UglyThingId}`, updates)
      .then(res => {
        setUglyThings(prevUglyThings =>
          prevUglyThings.map(UglyThing => (UglyThing._id !== UglyThingId ? UglyThing : res.data))
        )
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
  getUglyThings()
  }, [])

  return (
    <div>
      <div className='uglyThing-cont'>
        <UglyThingForm
          submit={addUglyThing}
          btnText='Add UglyThing'/>

          {uglyThings.map(uglyThing => (
            <UglyThing
            {...uglyThing}
            key={uglyThing.title}
            deleteUglyThing={deleteUglyThing}
            editUglyThing={editUglyThing}/>
          ))}
      </div>
    </div>
  )
}