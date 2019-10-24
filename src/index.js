import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import App from './components/App';
// import reducers from './reducers';

ReactDOM.render(
    // <Provider>
    //     <App />
    // </Provider>,
    <App />,
    document.querySelector('#root')
);