import React, { Fragment } from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Tracks />
    </Fragment>
  );
};

export default Home;
