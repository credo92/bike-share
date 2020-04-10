import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_PENDING,
    // FETCH_DATA_ERR,
} from './types';

import getBikeSharingData from '../api/api';

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        data
    }
};

export const fetchDataPending = () => ({
    type: FETCH_DATA_PENDING
});

// export const fetchDataErr = (err) => ({
//     type: FETCH_DATA_ERR,
//     err
// });

export const getData = (country) => dispatch => {
    dispatch(fetchDataPending());
    getBikeSharingData(country)
        .then(data => dispatch(fetchDataSuccess(data)))
    //
    // add catch for error boundary
    //
};