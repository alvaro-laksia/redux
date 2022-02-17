import './App.css';
import { ReduxTheory } from './components/reduxTheory/ReduxTheory';
import { Counter } from './components/counter/Counter.jsx';
import ShoppingCart from './components/ShoppingCart';

function App() {
	return (
		<div className="App">
			<Counter />
			<hr />
			<ShoppingCart />
			<hr />
			<ReduxTheory />
		</div>
	);
}

export default App;
