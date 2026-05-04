const PoliceStations = require("../dto/PoliceStations.js");

exports.getPoliceStationById = async (req, res, next) => {
    const data = await new PoliceStations().showPoliceStation(req.params.id)
    if (data) {
      return res.status(200).send({
        msg: "PoliceStation found!",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceStation not found!",
    })
  };

exports.getPoliceStations = async (req, res, next) => {
    const data = await new PoliceStations().showPoliceStations();
    if (data) {
      return res.status(200).send({
        msg: "PoliceStations were found",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceStations were not found",
    })
  };

exports.createPoliceStation = async (req, res, next) => {
    const data = await new PoliceStations().createPoliceStation(req.body);
    if (data) {
      return res.status(201).send({
        msg: "PoliceStation was created",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceStation was not created",
    })
  };

exports.updatePoliceStation = async (req, res, next) => {
    const data = await new PoliceStations().updatePoliceStation(req.params.id, req.body);
    if (data) {
      return res.status(200).send({
        msg: "PoliceStation was updated",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceStation was not updated",
    })
  };

exports.deletePoliceStation = async (req, res, next) => {
    const data = await new PoliceStations().deletePoliceStation(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "PoliceStation was deleted",
        payload: data,
      })
    }
    return res.status(500).send({
      msg: "PoliceStation was not deleted",
    })
  };