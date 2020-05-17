import React from "react";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5vw",
  },
  heading: {},
};

export default function ErrorLanding() {
  return (
    <div style={styles.div}>
      <h1 style={styles.heading}>Are you lost in the supermarket?</h1>
      <img
        src="https://eritasdaily.files.wordpress.com/2017/05/lost-in-supermarket1.jpg?w=640"
        alt="hazy supermarket"
      ></img>
      <h1 style={styles.heading}>Page not found</h1>
    </div>
  );
}
