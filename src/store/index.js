import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import travelsMiddleware from 'src/middlewares/travelsMiddleware';
import travelMiddleware from 'src/middlewares/travelMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    travelsMiddleware,
    travelMiddleware,
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
