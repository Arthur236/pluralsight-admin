import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // short-hand property naming
});

export default rootReducer;
