import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {


  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (

    <header className="head">
      <div className="container">

        {/* <nav>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile" className="btn">Me</Link>
              <a className="btn" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <h1> </h1>
              <Link to="/signup" className="btn">Sign Up</Link>
            </>
          )}
        </nav> */}

      </div>
    </header>
  );
};

export default Header;