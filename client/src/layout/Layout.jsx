import React from "react";

const Layout = ({ Header, Footer, children }) => {
  return (
    <div>
      <header>{Header}</header>
      <main className="min-h-lvh">{children}</main>
      <footer>{Footer}</footer>
    </div>
  );
};

export default Layout;
