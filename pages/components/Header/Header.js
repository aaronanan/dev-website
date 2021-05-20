import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <Head>
        <title>Lunar Develop Inc</title>
        <meta name="description" content="Lunar Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </>
  );
};

export default Header;
