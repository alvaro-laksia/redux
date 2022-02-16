import './App.css';
import { ReduxTheory } from './components/reduxTheory/ReduxTheory';
import { Counter } from './components/counter/Counter.jsx';

function App() {
	return (
		<div className="App">
			<Counter />
			<hr />
			<ReduxTheory />
		</div>
	);
}

export default App;
