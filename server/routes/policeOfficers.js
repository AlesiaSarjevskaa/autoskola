const express = require('express');
const router = express.Router();

const policeOfficersController = require("../controllers/policeOfficers")

router.get('/:id', policeOfficersController.getPoliceOfficerById);

router.get('/', policeOfficersController.getPoliceOfficers);

router.post('/', policeOfficersController.createPoliceOfficer);

router.put('/:id', policeOfficersController.updatePoliceOfficer);

router.delete('/:id', policeOfficersController.deletePoliceOfficer);


module.exports = router;
