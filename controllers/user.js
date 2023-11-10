const { v4: uuidv4 } = require("uuid");
const user = require("../models/user");
const { setUser } = require("../services/auth");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.send("home");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.render("login.ejs", {
      error: "Invalid email or password",
    });
  }

  // const sessionid = uuidv4();
  // setUser(sessionid, user);
  // res.cookie("uuid", sessionid);
  // return res.redirect("/");
  const token = setUser(user);
  res.cookie("token", token);
  return res.json({ token });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
