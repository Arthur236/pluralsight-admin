import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
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

        default:
            return state;
    }
}
