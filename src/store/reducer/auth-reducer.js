const initialStateAuth = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, action.payload}
        }
        case "LOGOUT": {
            const newState = {};
            return {newState}
        }
        default {
            return state
        }
    }
};

  
