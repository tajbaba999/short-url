// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const secret = "TAJ_BABA@123";

function setUser(user) {
  // setUser(id, User)
  //   sessionIdToUserMap.set(id, user);
  //   const payload = {
  // id
  //     ...user,
  //   };
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  if (!token) return null;
  //   return sessionIdToUserMap.get(id);
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
