import { connect } from 'react-redux';
import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

export const GameContainer = ({ dispatch }) => {

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout handleRestart={handleRestart} />;
};

export const Game = connect()(GameContainer);
