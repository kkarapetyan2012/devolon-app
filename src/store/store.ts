import { createStore, combineReducers, applyMiddleware } from 'redux';
import cardReducer from './reducers/cardReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  cardReducer
});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

export default store;