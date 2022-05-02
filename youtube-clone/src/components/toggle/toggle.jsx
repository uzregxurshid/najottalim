import React from 'react';
import './toggle.scss'
const Toggle = () => {
    return (
      <>
          <span className={'video__toggle--text'}>Autoplay</span>
          <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
          </label>
      </>
    );
};

export default Toggle;