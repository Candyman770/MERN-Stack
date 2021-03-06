import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';

import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import dishesReducer from './store/reducers/dishes';
import authReducer from './store/reducers/auth';
import favoritesReducer from './store/reducers/favorite';
import commentsReducer from './store/reducers/comments';

//const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;
const rootReducer=combineReducers({
	dishes:dishesReducer,
	auth:authReducer,
	favorites:favoritesReducer,
	comments:commentsReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk));

const app=(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
