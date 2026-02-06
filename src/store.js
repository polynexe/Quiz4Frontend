import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import {projectListReducer} from './reducers/projectReducers';

const reducer = combineReducers({
    projectList: projectListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore({
    reducer,
    initialState,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;