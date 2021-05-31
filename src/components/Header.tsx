import React from "react";

const Header = () => {
  return (
    <header>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        data-crossOrigin
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        data-crossOrigin
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        data-crossOrigin
      ></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </header>
  );
};

export default Header;
