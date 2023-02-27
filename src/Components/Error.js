import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  console.log(useRouteError());

  return (
    <div className="error-container">
      <h1>{statusText}</h1>
      <h2>{status}</h2>
    </div>
  );
};

export default Error;
