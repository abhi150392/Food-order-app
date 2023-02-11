import React from "react";

const Shimmer = () => {
  return (
    <div className="restarant-card">
      {Array(10)
        .fill("")
        .map((item, idx) => {
          return <div key={idx} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
