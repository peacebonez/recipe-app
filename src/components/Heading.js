import React from "react";
import { FaStar } from "react-icons/fa";

export default function Heading({
  query,
  handleChange,
  handleSubmit,
  isError,
}) {
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
      ></input>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <button className="fave-btn" name="fave-btn">
        <div className="star-container">
          <FaStar className="star" /> <FaStar className="star" />
          {"  "}
          <FaStar className="star" />
        </div>
      </button>
    </div>
  );
}
