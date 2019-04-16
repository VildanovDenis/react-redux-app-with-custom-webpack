const initialStateSpinner = {
  showSpinner: false
};

export const spinnerReducer = (state = initialStateSpinner, action) => {
  switch (action.type) {
    case "SHOW_SPINNER": {
      return { ...state, showSpinner: action.payload };
    }
    case "HIDE_SPINNER": {
      return { ...state, showSpinner: action.payload };
    }
    default: {
      return state;
    }
  }
};
