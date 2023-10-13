import React from "react";
import { signup } from "../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import {
  setSignupError,
  setToken,
  setUserInputs,
} from "../actions/user.action";

function Singup() {
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.userState.userInputs);
  const signupError = useSelector((state) => state.userState.signupError);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInputs({ ...userInputs, [name]: value }));
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      const token = await signup(userInputs);
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(setToken(token));
      dispatch(setSignupError(false));
    } catch (error) {
      dispatch(setSignupError(true));
    }
  };

  return (
    <div className="auth">
      <p style={{ color: "white" }}>{signupError && "Email Already Exist."}</p>
      <form onSubmit={handleSignupClick}>
        <label htmlFor="firstName">
          Firstname:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userInputs.firstName}
            placeholder="firstname"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="lastName">
          Lastname:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userInputs.lastName}
            placeholder="lastname"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={userInputs.email}
            placeholder="mail@gmail.com"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={userInputs.password}
            placeholder="password"
            onChange={handleUserInputsChange}
          />
        </label>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Singup;
