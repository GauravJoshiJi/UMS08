const axios = require("axios");
// for Home route
exports.home_route = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(`Error:- ${err}`);
    });
};
// for adding new user
exports.add_user = (req, res) => {
  res.render("add_user");
};
// for updaring user
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then((responseData) => {
      res.render("update_user", { user: responseData.data });
    })
    .catch((err) => {
      res.send(`Error:- ${err}`);
    });
};
