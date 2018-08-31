import React, { Fragment } from "react";
// import { func } from "prop-types";
import { Scrollbars } from 'react-custom-scrollbars';
import GameItem from "./GameItem";

const Body = props => {
  function renderAllGames() {
    const { allGames } = props;
    return allGames.map(item => <GameItem key={item.id} gameItem={item} />);
  }

  return (
    <Fragment>
      <Scrollbars >
      <div className="body">{renderAllGames()}</div>
      </Scrollbars>
    </Fragment>
  );
};

export default Body;
