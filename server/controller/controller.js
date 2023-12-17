const Userdb = require("../model/model");
//for creating new user.
exports.creating_user = (req, res) => {
  if (!req.body) {
    res.status(404).send({ message: `Form cannot be empty` });
  }
  //creating new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  //saving user into database
  user
    .save(user)
    .then((data) => {
      //   res.send(data);
      res.redirect("/add-user");
    })
    .catch((err) => {
      res.status(500).send({ message: `Error while inserting data. ${err}` });
    });
};
//for finding all or finding single user.
exports.finding_user = (req, res) => {
  if (req.query.id) {
    let id = req.query.id;
    Userdb.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: `User with this id not present: ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error while fetching users: ${err}` });
      });
  } else {
    Userdb.find()
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `User not present` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: `Error while fetching users: ${err}` });
      });
  }
};
// for updating user
exports.updating_user = (req, res) => {
  if (!req.body) {
    res.status(404).send(`Form cannot be empty`);
  }
  let id = req.params.id;

  Userdb.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send(`User with id = ${id} is not present`);
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send(`Error while updating data. Err:- ${err}`);
    });
};
// for deleting user
exports.deleting_user = (req, res) => {
  let id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: `User with id = ${id} not found` });
      } else {
        res.send({ message: `User deleted Successfully` });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Error while deleting data. Error:- ${err}` });
    });
};
