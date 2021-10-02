let initialStage = {
  isLoading: false,
  errorMessage: null,
  data: [],
  loader: false
};

const employeList = (state = initialStage, actions) => {
  switch (actions.type) {
    case "GET_LIST_FETCHING":
      return { ...state, isLoading: true, errorMessage: null };
      break;
    case "GET_LIST_FETCHING_SUCCESS":
      return { ...state, isLoading: false, data: actions.response };
      break;
    case "GET_LIST_FETCHING_FAILED":
      return { ...state, isLoading: false, data: [], errorMessage: actions.response.message };
      break;
    case "GET_LIST_RESET":
      return { ...state, isLoading: false, errorMessage: null, data: [] };
      break;
    default:
      return state;
  }
};

export default employeList;
