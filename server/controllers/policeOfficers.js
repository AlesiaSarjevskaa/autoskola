const PoliceOfficers = require("../dto/PoliceOfficers.js");

exports.getPoliceOfficerById = async (req, res, next) => {
    const data = await new PoliceOfficers().showPoliceOfficer(req.params.id)
    if (data) {
      return res.status(200).send({
        msg: "PoliceOfficer found!",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceOfficer not found!",
    })
  };

exports.getPoliceOfficers = async (req, res, next) => {
    const data = await new PoliceOfficers().showPoliceOfficers();
    if (data) {
      return res.status(200).send({
        msg: "PoliceOfficers were found",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceOfficers were not found",
    })
  };

exports.createPoliceOfficer = async (req, res, next) => {
    const data = await new PoliceOfficers().createPoliceOfficer(req.body);
    if (data) {
      return res.status(201).send({
        msg: "PoliceOfficer was created",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceOfficer was not created",
    })
  };

exports.updatePoliceOfficer = async (req, res, next) => {
    const data = await new PoliceOfficers().updatePoliceOfficer(req.params.id, req.body);
    if (data) {
      return res.status(200).send({
        msg: "PoliceOfficer was updated",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceOfficer was not updated",
    })
  };

exports.deletePoliceOfficer = async (req, res, next) => {
    const data = await new PoliceOfficers().deletePoliceOfficer(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "PoliceOfficer was deleted",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceOfficer was not deleted",
    })
  };