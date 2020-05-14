import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Axios from "axios";

export default function Heading({
  query,
  handleChange,
  handleSubmit,
  recipes,
}) {
  const clickLog = (e) => {
    console.log(e.target);
    console.log(e.target.name);
  };
  return (
    <div className="header-wrapper">
      <h1 className="title">Food Finder</h1>
      <input
        type="text"
        className="search-bar"
        name="search"
        value={query}
        placeholder="Search for Recipe..."
        onChange={handleChange}
      ></input>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
      <button className="fave-btn" name="fave-btn" onClick={clickLog}>
        <FaStar className="star" /> <FaStar className="star" />
        {"  "}
        <FaStar className="star" />
      </button>
    </div>
  );
}
