import { createStore } from 'redux';
import todoReducer, { initialState as todoInitialState } from './todos';

export default createStore(todoReducer, todoInitialState);
