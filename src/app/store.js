import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import { GET_GREETING, GET_GREETING_SUCCESS } from '../features/greeting/greeting_slice';

const initialState = {
  greeting: '',
  loading: false,
};

function rootReducer(state, action) {
  switch (action.type) {
    case GET_GREETING:
      return { ...state, loading: true };
    case GET_GREETING_SUCCESS:
      return { ...state, loading: false, greeting: action.payload.message };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
