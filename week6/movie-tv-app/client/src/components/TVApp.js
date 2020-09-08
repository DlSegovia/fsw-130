import React, { useState, useEffect } from "react";
import axios from "axios";
import TVShow from "./TVShow.js";
import TVShowForm from "./TVShowForm.js";

export default function App() {
  const [tvShows, setTVShows] = useState([]);

  function getTVShows() {
    axios.get("http://localhost:9000/TVShow")
      .then(res => setTVShows(res.data))
      .catch(err => console.log(err.response.data.errMsg));
  }

  function addTVShow(newTVShow) {
    axios.post("http://localhost:9000/TVShow", newTVShow)
      .then(res => {
        setTVShows(prevTVShow => [...prevTVShow, res.data]);
      })
      .catch(err => console.log(err));
  }

  function deleteTVShow(TVShowId) {
    axios.delete(`http://localhost:9000/TVShow/${TVShowId}`)
      .then(res => {
        setTVShows(prevTVShow =>
          prevTVShow.filter(TVShow => TVShow._id !== TVShowId)
        );
      })
      .catch(err => console.log(err));
  }

  function editTVShow(updates, TVShowId) {
    axios
      .put(`http://localhost:9000/TVShow/${TVShowId}`, updates)
      .then(res => {
        setTVShows(prevTVShow =>
          prevTVShow.map(TVShow => (TVShow._id !== TVShowId ? TVShow : res.data))
        );
      })
      .catch(err => console.log(err));
  }

  // function handleFilter(e) {
  //   console.log(e.target.value);
  // }

  useEffect(() => {
    getTVShows();
  }, []);

  return (
    <div>
      <div className="TVShow-container">
        <TVShowForm
          submit={addTVShow}
          btnText="Add TVShow"
        />

        {/* <h4>Filter by Genre</h4>
        <select onChange={handleFilter} className="filter-form">
          <option value="reset">All TVShow</option>
          <option value="action">Action</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
        </select> */}

        {TVShow.map(TVShow => (
          <TVShow
            {...TVShow}
            key={TVShow.title}
            deleteTVShow={deleteTVShow}
            editTVShow={editTVShow}
          />
        ))}
      </div>
    </div>
  )
}