const { User } = require("../models/user");
const _ = require("lodash");

//localhost:3000/users/register

module.exports.signup = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

//localhost:3000/users/login

module.exports.signin = (req, res) => {
  const body = req.body;
  User.findByCredentials(body.email, body.password)
    .then((user) => {
      return user.generateToken();
    })

    .then((token) => {
      res.setHeader("xauth", token).json({});
    })
    .catch((err) => {
      res.json(err);
    });
};
//localhost:3000/users/account
module.exports.account = (req, res) => {
  const { user } = req;
  res.json(_.pick(user, ["_id", "firstname", "email"]));
};
//localhost:3000/users/logout

module.exports.logout = (req, res) => {
  const { user, token } = req;
  console.log("user", req);
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(() => {
      res.json({ notice: "successfully logged out" });
    })
    .catch((err) => {
      res.json(err);
    });
};
