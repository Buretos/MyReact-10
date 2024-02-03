import { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Information } from './components';
import styles from './game.module.css';

export class GameLayout extends Component {
  render() {
    const { handleRestart } = this.props;

    return (
      <div className={styles.game}>
        <Information />
        <Field />
        <button className={styles.restartButton} onClick={handleRestart}>
          Начать заново
        </button>
      </div>
    );
  }
}

GameLayout.propTypes = {
  handleRestart: PropTypes.func,
};
