import { Component } from 'react';
import { connect } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './information-layout';

export class InformationContainer extends Component {
  render() {
    const { status, currentPlayer } = this.props;

    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAYER_NAME[currentPlayer];

    const information =
      status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

    return <InformationLayout information={information} />;
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
