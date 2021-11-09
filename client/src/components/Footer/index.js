import React from 'react';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="container">
        &copy;{new Date().getFullYear()} by Collection Crate
      </div>
    </footer>
  );
};

export default Footer;
