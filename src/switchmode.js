

import React from "react";

const SwitchMode = ({ toggleMode }) => {
  return (
    <div className="switch-mode">
      <label className="switch">
        <input type="checkbox" onChange={toggleMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default SwitchMode;
