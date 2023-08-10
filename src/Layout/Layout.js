import React from "react";
import { Header } from "./Header";
import PageContainer from "./PageContainer";
import Footer from "./Footer";
import "./../assets/css/global.css";

const Layout = () => {
  return (
    <>
      <div data-testid="layout-component">
        <main className="main">
          <Header />
          <PageContainer />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
