import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        // case types.CREATE_COURSE:
        //     return[...state,
        //         Object.assign({}, action.course)
        //     ];
            // ... -> spread operator
            // spreads the state array and explodes it out while creating a new instance of it
            // object.assign creates a deep copy of the state with the new course

        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}
