import React, { useState } from "react";
import Weather from "./Weather";
import "./Navigation.css";

export default function Navigation() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function searchInput(event) {
    event.preventDefault();
    <Weather city={city} />;
  }

  function updateSearch(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Navigation">
      <nav className="navbar navbar-light navigation">
        <div className="container-fluid search justify-content-start">
          <form className="d-flex" onSubmit={searchInput}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Change City"
              aria-label="Search"
              onChange={updateSearch}
            />
            <button className="btn search-button" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <button className="btn current-location-button" type="submit">
            <i className="fas fa-map-pin"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}
