const express = require('express');
const router = express.Router();

const policeStationsController = require("../controllers/policeStations")

router.get('/:id', policeStationsController.getPoliceStationById);

router.get('/', policeStationsController.getPoliceStations);

router.post('/', policeStationsController.createPoliceStation);

router.put('/:id', policeStationsController.updatePoliceStation);

router.delete('/:id', policeStationsController.deletePoliceStation);


module.exports = router;
