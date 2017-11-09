const Models = require('../models/all-models');

const dataResponse = {
  message: 'berhasil'
}

module.exports = {
  createUser(req, res) {
    const passedData = {
      email: req.body.email,
      name: req.body.name,
      tagline: req.body.tagline,
    };
    const user = new Models.User(passedData);
    user.save()
    .then((user) => {
      dataResponse.user = user;
      res.send(dataResponse);
    })
    .catch((err) => {
      dataResponse.message = 'gagal';
      dataResponse.err = err;
      res.send(dataResponse);
      dataResponse.message = 'berhasil';
    })
  },
};
