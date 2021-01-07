import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/" id="name">
                The Shoppies
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Welcome
                </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/nominations"
                            className={window.location.pathname === "/noninations" ? "nav-link active" : "nav-link"}
                        >
                            Nominations
                </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


export default Nav;

