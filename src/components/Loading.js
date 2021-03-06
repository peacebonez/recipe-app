import React from "react";
import PropTypes from "prop-types";

//Reused from Tyler McGinnis course

const styles = {
  content: {
    fontSize: "3vh",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "12vw",
    textAlign: "center",
  },
};

export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setContent((content) =>
        content === `${text}...` ? text : `${content}.`
      );
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
