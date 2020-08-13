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
      
      axios.delete(`http://localhost:7000/uglyThing/${uglyThingId}`)
        .then(res => {
          setUglyThings(prevUglyThings =>
            prevUglyThings.filter(uglyThing => uglyThing._id !== uglyThingId)
          )
        })
        .catch(err => console.log(err))
    }

    function editUglyThing(updates, uglyThingId) {
      axios.put(`http://localhost:7000/uglyThings/${uglyThingId}`, updates)
        .then(res => {
          setUglyThings(prevUglyThings =>
            prevUglyThings.map(uglyThing => (uglyThing._id !== uglyThingId ? uglyThing : res.data))
          )
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
    getUglyThings()
    }, [])

    return (
      <div>
        <div>
          <UglyThingForm
            submit={addUglyThing}
            btnText='Add UglyThing'/>

            {uglyThings.map(uglyThing => (
              <UglyThing
              {...uglyThing}
              key={uglyThing.titimgaele}
              imagURL = {UglyThing.imagURL}
              deleteUglyThing={deleteUglyThing}
              editUglyThing={editUglyThing}/>
            ))}
        </div>
      </div>
    )
  }