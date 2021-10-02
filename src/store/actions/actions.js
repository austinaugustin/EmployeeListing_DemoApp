import apiContants from '../../common/apiConstants';
import Api from '../../common';

export const getData = (val) => {
    return function (dispatch) {
        dispatch({ type: "GET_LIST_FETCHING", val: val });
        Api(apiContants.homeUrl)
            .then((response) => {
                if (response.length > 0) {
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