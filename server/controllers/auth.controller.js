import User from "../models/user.model.js";

async function signup(userDetails) {
  try {
    const user = new User(userDetails);
    const newUser = await user.save();
    return newUser;
  } catch (err) {
    throw err;
  }
}

async function login(email) {
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return foundUser;
    } else {
      console.error("User not found!");
    }
  } catch (err) {
    throw err;
  }
}

async function getUser(email) {
  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return foundUser;
    } else {
      throw new Error("User not found!");
    }
  } catch (err) {
    throw err;
  }
}

export { getUser, signup, login };
