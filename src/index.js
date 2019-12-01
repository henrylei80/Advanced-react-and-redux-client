import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/Signup';
import SignIn from './components/auth/Signin';
import SignOut from './components/auth/Signout';
import Feature from './components/Feature';
import reducers from './reducers';

const store = createStore(
  reducers,
  { auth: { authenticated: { authenticated: localStorage.getItem('token') } } },
  applyMiddleware(reduxThunk)
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signout' component={SignOut} />
        <Route path='/feature' component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
