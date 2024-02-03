import { Component } from 'react';
import { connect } from 'react-redux';
import { FieldLayout } from './field-layout';
import { checkEmptyCell, checkWin } from '../../utils';
import { setCurrentPlayer, setField, setStatus } from '../../actions';
import { PLAYER, STATUS } from '../../constants';

export class FieldContainer extends Component {
  handleCellClick = (cellIndex) => {
    const { status, currentPlayer, field, dispatch } = this.props;

    if (
      status === STATUS.WIN ||
      status === STATUS.DRAW ||
      field[cellIndex] !== PLAYER.NOBODY
    ) {
      return;
    }

    const newField = [...field];
    newField[cellIndex] = currentPlayer;

    dispatch(setField(newField));

    if (checkWin(newField, currentPlayer)) {
      dispatch(setStatus(STATUS.WIN));
    } else if (checkEmptyCell(newField)) {
      const newCurrentPlayer =
        currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
      dispatch(setCurrentPlayer(newCurrentPlayer));
    } else {
      dispatch(setStatus(STATUS.DRAW));
    }
  };

  render() {
    const { field } = this.props;

    return <FieldLayout field={field} handleCellClick={this.handleCellClick} />;
  }
}

const mapStateToProps = (state) => ({
  status: state.status,
  currentPlayer: state.currentPlayer,
  field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer);
