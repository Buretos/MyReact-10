import { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Information } from './components';

export class GameLayout extends Component {
  render() {
    const { handleRestart } = this.props;

    return (
	 <div className="flex flex-col items-center w-96 mx-auto my-14 text-lg" >
        <Information />
        <Field />
        <button  className="bg-slate-100 hover:bg-slate-200 px-4 border-2 " onClick={handleRestart}>
          Начать заново
        </button>
      </div>
    );
  }
}

GameLayout.propTypes = {
  handleRestart: PropTypes.func,
};
