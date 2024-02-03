import { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

export class GameContainer extends Component {
  handleRestart = () => {
    this.props.dispatch(RESTART_GAME);
  };

  render() {
    return <GameLayout handleRestart={this.handleRestart} />;
  }
}

export const Game = connect()(GameContainer);

