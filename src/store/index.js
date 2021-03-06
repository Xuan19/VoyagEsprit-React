import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import travelsMiddleware from 'src/middlewares/travelsMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    travelsMiddleware,
    userMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
