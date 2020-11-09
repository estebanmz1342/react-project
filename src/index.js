import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import firebaseConfig from './container/Firebase/config';
import counterReducer from "./store/reducers/counter";
import {FirebaseAppProvider} from 'reactfire';

const rootReducer = combineReducers ({
  counterStore: counterReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store = {store}>
    <App />
    </Provider>
    </FirebaseAppProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
