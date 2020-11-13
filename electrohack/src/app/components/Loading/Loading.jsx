import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        alignItems: "center",
        width: "58%",
        zIndex: "1000",
      }}
    >
      {" "}
      <Spinner animation="border" variant="primary" size={"lg"} />
    </div>
  );
};

export default Loading;
