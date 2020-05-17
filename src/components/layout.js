import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/style.css";

const Layout = ({ className, bodyClass, children, ...props }) => {
  bodyClass = bodyClass || "container mx-auto px-6 md:px-10 lg:px-16";
  return (
    <div className={className} {...props}>
      <Header />
      <div className={bodyClass}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
