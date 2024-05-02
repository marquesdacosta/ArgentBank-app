import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../actions/actions';

// Initial state
const initialState = {
  userInfo: { token: null },
  error: null,
  isConnected: false,
};

// Reducer function
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isConnected: false };
    case USER_LOGIN_SUCCESS:
      return { ...state, isConnected: true, userInfo: action.payload.body, error: null };
    case USER_LOGIN_FAIL:
      return { ...state, isConnected: false, userInfo: null, error: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null, isConnected: false };
    default:
      return state;
  }
};

export default authReducer;
