const Cats = require("../dto/Cats.js");

exports.getCatById = async (req, res, next) => {
    const data = await new Cats().showCat(req.params.id)
    if (data) {
      return res.status(200).send({
        msg: "Cat found!",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "Cat not found!",
    })
  };

exports.getCats = async (req, res, next) => {
    const data = await new Cats().showCats();
    if (data) {
      return res.status(200).send({
        msg: "Cats were found",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "Cats were not found",
    })
  };

exports.createCat = async (req, res, next) => {
    const data = await new Cats().createCat(req.body);
    if (data) {
      return res.status(201).send({
        msg: "Cat was created",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "Cat was not created",
    })
  };

exports.updateCat = async (req, res, next) => {
    const data = await new Cats().updateCat(req.params.id, req.body);
    if (data) {
      return res.status(200).send({
        msg: "Cat was updated",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "Cat was not updated",
    })
  };

exports.deleteCat = async (req, res, next) => {
    const data = await new Cats().deleteCat(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Cat was deleted",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "Cat was not deleted",
    })
  };