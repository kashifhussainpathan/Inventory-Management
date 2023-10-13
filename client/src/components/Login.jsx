import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { setLoginError, setUser, setUserInputs } from "../actions/user.action";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.userState.userInputs);

  console.log(userInputs);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInputs({ ...userInputs, [name]: value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();

    const data = login(userInputs);

    toast.promise(data, {
      loading: "Logging in...",
      success: (data) => {
        dispatch(setUser(data?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", JSON.stringify(data.token));
        navigate("/");
        return <b>Login successful!</b>;
      },
      error: (error) => {
        dispatch(setLoginError("Invalid credentials"));
        return <b>Failed to log in. Please check your credentials.</b>;
      },
    });
  };

  return (
    <div className="auth">
      <form onSubmit={handleLoginClick}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={userInputs.email}
            placeholder="user@gmail.com"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={userInputs.password}
            placeholder="password"
            onChange={handleUserInputsChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
