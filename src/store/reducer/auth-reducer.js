const initialStateAuth = {
  isLogin: false
};

export const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case "LOGIN": {
      const newState = { ...action.payload, isLogin: true };
      return newState;
    }
    case "LOGOUT": {
      return { isLogin: false };
    }
    default: {
      return state;
    }
  }
};
