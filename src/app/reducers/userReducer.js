import {
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_RESET,
  USER_PROFILE_UPDATE,
  USER_PROFILE_UPDATE_FAIL,
} from '../actions/actions';

const initialState = {
  success: false,
  firstName: '',
  lastName: '',
  error: null,
  userName: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        success: true,
        firstName: action.payload.body.firstName,
        lastName: action.payload.body.lastName,
        userName: action.payload.body.userName,
        error: null,
      };
    case USER_PROFILE_FAIL:
      return {
        ...state,
        success: false,
        firstName: '',
        lastName: '',
        userName: '',
        error: action.payload,
      };
    case USER_PROFILE_RESET:
      return {
        ...initialState
      }
    case USER_PROFILE_UPDATE:
      return {
        ...state,
        success: true,
        error: null,
        userName: action.payload.body.userName,
      };
    case USER_PROFILE_UPDATE_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default userReducer;
