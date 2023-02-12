import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  return (
    <div>
      <h1>{statusText}</h1>
      <h2>{status}</h2>
    </div>
  );
};

export default Error;
