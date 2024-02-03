import { Component } from 'react';
import PropTypes from 'prop-types';
import { PLAYER, PLAYER_SIGN } from '../../constants';
import styles from './field.module.css';

export class FieldLayout extends Component {
  render() {
    const { field, handleCellClick } = this.props;

    return (
      <div className={styles.field}>
        {field.map((cellPlayer, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {PLAYER_SIGN[cellPlayer]}
          </button>
        ))}
      </div>
    );
  }
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])
  ),
  handleCellClick: PropTypes.func,
};
