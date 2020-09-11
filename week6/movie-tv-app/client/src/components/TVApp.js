import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from './Show';
import AddShowForm from './ShowForm';

export default function TVApp() {
  const [shows, setShows] = useState([]);

 function getShows() {
    axios.get("http://localhost:9000/shows")
      .then(res => setShows(res.data))
      .catch(err => console.log(err.response.data.errMsg));
  }
  function addShow(newShow) {
    axios.post("http://localhost:9000/shows", newShow)
      .then(res => {
        setShows(prevShows => [...prevShows, res.data]);
      })
      .catch(err => console.log(err));
  }

  function deleteShow(showId) {
    axios.delete(`http://localhost:9000/shows/${showId}`)
      .then(res => {
        setShows(prevShows =>
          prevShows.filter(show => show._id !== showId)
        );
      })
      .catch(err => console.log(err));
  }

  function editShow(updates, showId) {
    axios
      .put(`http://localhost:9000/shows/${showId}`, updates)
      .then(res => {
        setShows(prevShows =>
          prevShows.map(show => (show._id !== showId ? show : res.data))
        );
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getShows();
  }, []);

  return (
    <div>
      <div className="show-container">
        <AddShowForm
          submit={addShow}
          btnText="Add TV Show"
        />

        {shows.map(show => 
          <Show
            {...show}
            key={show.title}
            deleteTvShow={deleteShow}
            editTvShow={editShow}
          />
        )}
      </div>
    </div>
  )
} 