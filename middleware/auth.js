const { getUser } = require("../services/auth");

async function restrictToLoggedUserOnly(req, res, next) {
  const userid = req.cookie?.uuid;

  if (!userid) return res.redirect("/login");
  const user = getUser(userid);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userid = req.cookie?.uuid;
  const user = getUser(userid);
  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedUserOnly,
};
