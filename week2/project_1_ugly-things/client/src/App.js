import React, { useState, useEffect } from "react";
import axios from "axios";
import UglyThing from "./components/UglyThing.js";
import UglyThingForm from "./components/UglyThingForm.js";

export default function App() {
  const [uglyThings, setUglyThings] = useState([])

  function getUglyThings() {
    axios.get("/uglyThings")
      .then(res => setUglyThings(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addUglyThing(newUglyThing) {
    axios.post("/uglyThings", newUglyThing)
      .then(res => {
        setUglyThings(prevUglyThings => [...prevUglyThings, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteUglyThing(uglyThingId) {
    axios.delete(`/uglyThings/${UglyThing}`)
      .then(res => {
        setUglyThings(prevUglyThings =>
          prevUglyThings.filter(uglyThing => UglyThing._id !== uglyThingId)
        )
      })
      .catch(err => console.log(err))
  }

  function editUglyThing(updates, uglyThingId) {
    axios.put(`/uglyThings/${UglyThing}`, updates)
      .then(res => {
        setUglyThings(prevUglyThings =>
          prevUglyThings.map(uglyThings => (UglyThing._id !== uglyThingId ? UglyThing : res.data))
        )
      })
      .catch(err => console.log(err))
  }

  // function handleFilter(e) {
  //   console.log(e.target.value)
  // }

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