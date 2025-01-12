import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_AUTH_MSG,
} from "../Types";

const initialState = {
  isAuthenticated: null,
  msg: null,
  user: null,
  role: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("ACTION PAYLOAD",action.payload)
      return {
        ...state,
        isAuthenticated: true,
        msg: "Login Successfully",
        user: action.payload.user,
        role: action.payload.role,
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case CLEAR_AUTH_MSG:
      return {
        ...state,
        isAuthenticated: false,
        msg: "Logout",
        user: null,
        roll: null,
      };
    default:
      return state;
  }
}
