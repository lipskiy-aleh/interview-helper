import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createReducers from './reducers';
import history from '../utils/history';

const initialState = {};

export default createStore(
  createReducers(history),
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);
