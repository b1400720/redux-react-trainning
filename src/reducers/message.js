import * as types from './../constants/actionTypes';
import * as msg from './../constants/message';
let initialState = msg.MSG_WELCOME;

const message = (state = initialState, action) => {

    switch (action.type) {
        case types.CHANGE_MESSAGE: {
            return action.message;
        }
        // Trả về mặc định
        default:
            return state;
    }
};
export default message;