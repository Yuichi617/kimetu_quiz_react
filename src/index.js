import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, { persistor } from './store/Store';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';

//　ローカルストレージをクリア
//persistor.purge();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>loading...</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();