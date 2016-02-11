import {AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL} from './auth.actions';

export default function identity(state = {username: ''}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...state,
                username: ''
            };
        default:
            return state;
    }
}