  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import UglyThing from "./components/UglyThing.js";
  import UglyThingForm from "./components/UglyThingForm.js";

  export default function App() {
    const [uglyThing, setUglyThing] = useState([])

    function getUglyThing() {
      axios.get("http://localhost:7000/uglyThing")
        .then(res => setUglyThing(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addUglyThing(newUglyThing) {
      axios.post("http://localhost:7000/uglyThing", newUglyThing)
        .then(res => {
          setUglyThing(prevUglyThing => [...prevUglyThing, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteUglyThing(uglyThingId) {
      
      axios.delete(`http://localhost:7000/uglyThing/${uglyThingId}`)
        .then(res => {
          setUglyThing(prevUglyThings =>
            prevUglyThings.filter(uglyThing => uglyThing._id !== uglyThingId)
          )
        })
        .catch(err => console.log(err))
    }

    function editUglyThing(updates, uglyThingId) {
      axios.put(`http://localhost:7000/uglyThing/${uglyThingId}`, updates)
        .then(res => {
          setUglyThing(prevUglyThing =>
            prevUglyThing.map(uglyThing => (uglyThing._id !== uglyThingId ? uglyThing : res.data))
          )
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
    getUglyThing()
    }, [])

    return (
      <div>
        <div>
          <UglyThingForm
            submit={addUglyThing}
            btnText='Add UglyThing'/>

            {uglyThing.map(uglyThing => (
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