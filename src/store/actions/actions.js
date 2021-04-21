import apiContants from '../../common/apiConstants';
import Api from '../../common';

export const getData = (input, type, operator, val) => {
    return function (dispatch) {
        dispatch({ type: "GET_LIST_FETCHING", val: val });
        Api(apiContants.homeUrl + `?search=${input}&type${type}=&operator=${operator}`)
            .then((response) => {
                if (response.data) {
                    dispatch({ type: "GET_LIST_FETCHING_SUCCESS", response: response });
                }
                else {
                    dispatch({ type: "GET_LIST_FETCHING_FAILED", response: response, });
                }
            })
    }
};

export const resetData = () => {
    return function (dispatch) {
        dispatch({ type: "GET_LIST_RESET" });
    }
}


export const updateData = (input, type, operator, val) => {
    return function (dispatch) {
        dispatch({ type: "UPDATE_LIST_FETCHING" });
        Api(apiContants.homeUrl + `?search=${input}&type${type}=&operator=${operator}`)
            .then((response) => {
                if (response.data) {
                    dispatch({ type: "UPDATE_LIST_FETCHING_SUCCESS", response: response });
                }
                else {
                    dispatch({ type: "UPDATE_LIST_FETCHING_FAILED", response: response });
                }
            })
    }
};