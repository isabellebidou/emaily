import  'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';

import { legacy_createStore ,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios'
window.axios= axios;
// in browser console
//const survey = {title: 'essay survey', subject: 'give us feedback', recipients: 'isa.bidou@gmail.com', body: 'did you like our essay?'}
//axios.post('/api/surveys', survey)
const store  = legacy_createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
    document.querySelector('#root')

);
