import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Top from "./Top";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Top />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
