const Dogs = require("../dto/Dogs.js");

exports.getDogById = async (req, res, next) => {
    const data = await new Dogs().showDog(req.params.id)
    if (data) {
      return res.send({
        msg: "Dog found!",
        payload: data,
      });
    }
    return res.send({
      msg: "Dog not found!"
    })
  };

exports.getDogs = async (req, res, next) => {
  const msg = res.locals.msg;
    const data = await new Dogs().showDogs();
    if (data) {
      return res.send({
        roleMsg: msg,
        msg: "Dogs were found!",
        payload: data,
      })
    }
    return res.send({
      msg: "Dogs were not found"
    })
  };

exports.createDog = async (req, res, next) => {
  const data = await new Dogs().createDog(req.body);
  if (data) {
    return res.send({
      msg: "Dog was created",
      payload: data
    });
  }
  return res.send({
    msg: "Something went wrong!",
  })
  };

exports.updateDog = async (req, res, next) => {
  const data = await new Dogs().updateDog(req.params.id, req.body);
  if (data) {
    return res.send({
      msg: "Dog was updated",
      payload: data
    });
  }
  return res.send({
    msg: "Dog was not updated!",
  })
  };

exports.deleteDog = async (req, res, next) => {
  const data = await new Dogs().deleteDog(req.params.id);
  if (data) {
    return res.send({
      msg: "Dog was deleted",
      payload: data
    });
  }
  return res.send({
    msg: "Dog was not deleted",
  })
  };