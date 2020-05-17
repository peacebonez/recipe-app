import React from "react";
import { FaStar, FaHome } from "react-icons/fa";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Make custom hook for hover!!!

export default function Heading({
  query,
  handleChange,
  handleSubmit,
  isError,
}) {
  // state of showing or hiding the hover text over header icons
  const [homeShown, setHomeShown] = React.useState(false);
  const [faveShown, setFaveShown] = React.useState(false);

  //handles submission by striking the enter key
  const handleEnterSubmit = (e) => (e.key === "Enter" ? handleSubmit() : null);
  return (
    <div className="header-wrapper">
      <h1 className="title">Food Finder</h1>
      <input
        type="text"
        className={isError ? "search-bar error" : "search-bar"}
        name="search"
        value={query}
        placeholder={isError ? "RECIPE NOT FOUND" : "Search for Recipe..."}
        onChange={handleChange}
        onKeyDown={handleEnterSubmit}
      ></input>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <button
        className="fave-btn"
        name="fave-btn"
        onMouseOver={() => setFaveShown(true)}
        onMouseOut={() => setFaveShown(false)}
      >
        <div className="star-container">
          <FaStar className="star" /> <FaStar className="star" />
          {"  "}
          <FaStar className="star" />
        </div>
      </button>
      <button
        className="home-btn"
        onMouseOver={() => setHomeShown(true)}
        onMouseOut={() => setHomeShown(false)}
      >
        <FaHome />
      </button>
      <div className="home-container">
        <p
          style={{
            opacity: homeShown ? "100%" : "0%",
          }}
        >
          Home
        </p>
      </div>
      <div className="fave-container">
        <p
          style={{
            opacity: faveShown ? "100%" : "0%",
          }}
        >
          Favorites
        </p>
      </div>
    </div>
  );
}
