import React, { Fragment } from "react";

const GameItem = props => {
  const { gameItem } = props;
  return (
    <Fragment>
      <div
        className="game-item"
        style={{ backgroundImage: `url(${gameItem.thumbnailUrl})` }}
      >
        <div className="overlay">
          <a>
            <div className="game-name">{gameItem.name}</div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default GameItem;
