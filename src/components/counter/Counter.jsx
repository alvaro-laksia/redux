import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { res, res5, reset, sum, sum5 } from '../../actions/counterActions';

export const Counter = () => {
	// With useSelector hook we can access to global state
	const state = useSelector((state) => state);

	// With Dispach hook we can use functions from actions folder
	const dispatch = useDispatch();

	return (
		<>
			<div>Counter</div>
			<nav>
				<button onClick={() => dispatch(sum())}>+1</button>
				<button onClick={() => dispatch(res())}>-1</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
				<button onClick={() => dispatch(sum5())}>+5</button>
				<button onClick={() => dispatch(res5())}>-5</button>
			</nav>
			<h3>{state.counter}</h3>
		</>
	);
};
