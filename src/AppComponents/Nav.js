import React from 'react'

function Nav() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <span>GITAM Sports</span>
        </li>
        <li className="menu">
          <a href="/">
            <span className="text">Home</span>
            {/* <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span> */}
          </a>
        </li>
        <li className="menu">
          <a href="/">
            <span className="text">About</span>
            {/* <span className="icon">
              <ion-icon name="people-circle-outline"></ion-icon>
            </span> */}
          </a>
        </li>
        <li className="menu">
          <a href="/">
            <span className="text">Events</span>
            {/* <span className="icon">
              <ion-icon name="partly-sunny-outline"></ion-icon>
            </span> */}
          </a>
        </li>
        <li className="menu">
          <a href="/">
            <span className="text">SIGs</span>
            {/* <span className="icon">
              <ion-icon name="call-outline"></ion-icon>
            </span> */}
          </a>
        </li>
        <li className="menu">
          <a href='\'>
            <span className="text">Atheletes</span>
            {/* <span className="icon">
              <ion-icon name="log-in-outline"></ion-icon>
            </span> */}
          </a>
        </li>
        <div className="selector">

        </div>
      </ul>
    </div>
  )
}

export default Nav
