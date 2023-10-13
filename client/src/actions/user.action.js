import { useSelector } from "react-redux";

export const userState = (propertyName) =>
  useSelector((state) => state.userState[propertyName]);

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setUserInputs = (inputs) => {
  return {
    type: "SET_USER_INPUTS",
    payload: inputs,
  };
};

export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const setLoginError = (error) => {
  return {
    type: "SHOW_LOGIN_ERROR",
    payload: error,
  };
};

export const setSignupError = (error) => {
  return {
    type: "SHOW_SIGNUP_ERROR",
    payload: error,
  };
};

export const setIsUserLoading = (loading) => {
  return {
    type: "IS_USER_LOADING",
    payload: loading,
  };
};
