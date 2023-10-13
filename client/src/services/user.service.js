import axios from "axios";
import { setIsUserLoading, setUser } from "../actions/user.action";

const API_URL = "http://localhost:4000";

export const login = async (userInputs) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userInputs);

    if (response.status === 200) {
      const data = response.data;
      return data;
    } else if (response.status === 401) {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw error;
  }
};

export const signup = async (userDetails) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userDetails);

    if (response.status === 201) {
      const token = response.data.token;
      return token;
    } else {
      console.error("Oops, Failed to signup!");
    }
  } catch (error) {
    throw new Error("Email already exist.");
  }
};

export const fetchUser = async (token, dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      const user = response.data.user;
      dispatch(setIsUserLoading(true));
      dispatch(setUser(user));
      dispatch(setIsUserLoading(false));
    }
  } catch (error) {
    const emptyUser = {};
    dispatch(setUser(emptyUser));
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
  }
};
