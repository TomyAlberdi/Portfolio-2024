import React from "react";

const Welcome = ({ Loading }) => {
  if (Loading) {
    return (
      <div className="Welcome">
        <h1>
          Tomás Alberdi
          <span>Portfolio</span>
        </h1>
      </div>
    );
  }
};

export default Welcome;
