import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import HomeScreen from './screens/home'
import { categoryResults, categorySelectResults } from './reducers'

const store = createStore(combineReducers({categoryResults, categorySelectResults}), applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
