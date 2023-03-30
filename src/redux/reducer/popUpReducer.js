import {
    AUTH,
    CHANGE_NAME,
    DATA_STATE,
    IS_LOADING,
    POPUP_TYPE,
    REG,
    REQUEST_STATUS,
    SAVE_DATA, SET_RESPONSE
} from "../actions/popUpActions";
import {getAuth} from "firebase/auth";

const initialState = {
    data: {
        name: '',
        password: '',
        email: '',
    },
    response: {},
    type: 'signUp',
    requestReady: null,
    isLoading: true,
};

export const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return {...state, response: action.payload};
        case SAVE_DATA:
            return {...state, data: action.payload};
        case POPUP_TYPE:
            if (state.type === action.payload)
                return state;
            else return {...initialState, type: action.payload, isLoading: state.isLoading};
        case DATA_STATE:
            return {...state, isDataOk: action.payload};
        case REQUEST_STATUS:
            return {...state, requestReady: action.payload};
        case REG:
            return {...state, response: action.payload};
        case IS_LOADING:
            return {...state, isLoading: action.payload};
        case SET_RESPONSE:
            return {...state, response: action.payload};
        default:
            return state;

    }
};