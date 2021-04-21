let initialStage = {
  isLoading: false,
  errorMessage: null,
  data: [],
  operators: [],
  loader: false
};

const simcardList = (state = initialStage, actions) => {
  switch (actions.type) {
    case "GET_LIST_FETCHING":
      return { ...state, isLoading: true, loader: actions.val ? true : false, errorMessage: null };
      break;
    case "GET_LIST_FETCHING_SUCCESS":
      return { ...state, isLoading: false, data: actions.response.data, operators: actions.response.operators, loader: false };
      break;
    case "GET_LIST_FETCHING_FAILED":
      return { ...state, isLoading: false, data: [], operators: [], errorMessage: actions.response.message, loader: false };
      break;
    case "GET_LIST_RESET":
      return { ...state, isLoading: false, errorMessage: null, data: [], loader: false };
      break;
    case "UPDATE_LIST_FETCHING":
      return { ...state, isLoading: true, errorMessage: null, loader: false };
      break;
    case "UPDATE_LIST_FETCHING_SUCCESS":
      return { ...state, isLoading: false, data: actions.response.data, operators: actions.response.operators, loader: false };
      break;
    case "UPDATE_LIST_FETCHING_FAILED":
      return { ...state, isLoading: false, errorMessage: actions.response.message, data: [], loader: false };
      break;
    default:
      return state;
  }
};

export default simcardList;
