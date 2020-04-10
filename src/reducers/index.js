import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    FETCH_DATA_ERR
} from "../actions/types";

const initialState = {
    data: [],
    loading: true,
    err: ''
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA_PENDING:
            return {
                ...state,
                data:[],
                loading: true,
                error: ''
            };

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
 
        case FETCH_DATA_ERR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default: {
            return state;
        }
    }
};

export default asyncReducer;