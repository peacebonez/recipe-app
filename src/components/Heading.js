import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

//Make custom hook for hover!!!

export default function Heading({
  query,
  handleChange,
  handleSubmit,
  isError,
}) {
  // state of showing or hiding the hover text over header icons
  const [homeShown, setHomeShown] = React.useState(false);

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
      <Link to="/recipes">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </Link>
      <Link to="/">
        <button
          className="home-btn"
          onMouseOver={() => setHomeShown(true)}
          onMouseOut={() => setHomeShown(false)}
        >
          <FaHome />
        </button>
      </Link>
      <div className="home-container">
        <p
          style={{
            opacity: homeShown ? "100%" : "0%",
          }}
        >
          Home
        </p>
      </div>
    </div>
  );
}
