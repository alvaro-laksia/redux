import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { shoppingReducer } from './shoppingReducer';
import { crudReducer } from './crudReducer';

const reducer = combineReducers({
	counter: counterReducer,
	shopping: shoppingReducer,
	crud: crudReducer,
});

export default reducer;
