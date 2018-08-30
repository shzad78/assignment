import React, { Fragment } from "react";
// import { func } from "prop-types";

import GameItem from "./GameItem";

const Body = props => {
  function renderAllGames() {
    const { allGames } = props;
    return allGames.map(item => <GameItem key={item.id} gameItem={item} />);
  }

  return (
    <Fragment>
      <div className="body">{renderAllGames()}</div>
    </Fragment>
  );
};

export default Body;
