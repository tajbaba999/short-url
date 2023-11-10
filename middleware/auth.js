const { getUser } = require("../services/auth");

async function checkForAuthicaion(req, res, next) {
  // const authorizationHeadervalue = req.headers["Authorization"];
  const tokenCookie = req.cookies?.token;
  // if (
  //   !authorizationHeadervalue ||
  //   !authorizationHeadervalue.startsWith("Bearer")
  // )
  if (!tokenCookie) return next();
  return next();

  const token = authorizationHeadervalue.split("Bearer")[1];
  const user = getUser(token);

  req.user = user;
  return next();
}

function restrictTo(roles = []) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login.ejs");

    if (!roles.includes(req.user.role)) return res.end("UnAuthorised");
  };
}

// async function restrictToLoggedUserOnly(req, res, next) {
//   // const userid = req.cookie?.uuid;
//   const userid = req.headers["Authorization"];

//   if (!userid) return res.redirect("/login");
//   const token = userid.split("Bearer ")[1];
//   const user = getUser(token);

//   if (!user) return res.redirect("/login");

//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   // const userid = req.cookie?.uuid;
//   const userid = req.headers["authorization"];
//   const token = userid.split("Bearer ")[1];

//   const user = getUser(token);
//   req.user = user;
//   next();
// }

module.exports = {
  // restrictToLoggedUserOnly,
  restrictTo,
  checkForAuthicaion,
};
