import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Redirect, HashRouter } from 'react-router-dom';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Header from './components/header';
import IndexRoute from './components/indexRoute';
import OtherPage from './components/otherPage';
import reducers from './reducers';

let store = createStore(reducers,applyMiddleware(thunk,promiseMiddleware,logger));

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={IndexRoute}/>
                    <Route path="/other" component={OtherPage}/>
                </div>
            </BrowserRouter>
        </Provider>
  , document.querySelector('.container'));
