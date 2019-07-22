import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
import ErrorHandler from './components/ErrorHandler';
  

ReactDOM.render(
<Provider store = {store}>
    <Router>
        <ErrorHandler render={() => <div className="alert alert-danger">Oops!!</div>}>
           <App />
        </ErrorHandler>
    </Router>
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
