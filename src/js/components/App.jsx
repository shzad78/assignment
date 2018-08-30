import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";

import * as actions from "../actions";
import Header from "./Header";
import Body from "./Body";

export class App extends Component {
  static propTypes = {
    loadAllGames: func.isRequired
  };

  static defaultProps = {};

  componentDidMount() {
    const { loadAllGames } = this.props;
    loadAllGames();
  }

  render() {
    const { allGames } = this.props;
    return (
      <Fragment>
        <div className="app">
          <div className="overlay">
            <Header />
            <Body allGames={allGames} />
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ loadAllGamesReducer }) {
  return {
    allGames: loadAllGamesReducer.data
  };
}

export default connect(
  mapStateToProps,
  {
    loadAllGames: actions.loadAllGames
  }
)(App);
