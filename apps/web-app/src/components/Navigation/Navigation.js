import './Navigation.css';

import React from 'react';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__title-container">
        <h1 className="navigation__title">Reservator</h1>
        <button className="navigation-hamburger">H</button>
      </div>
    </nav>
  );
}
