const express = require('express');
const router = express.Router();

const dogsController = require("../controllers/dogs");
const authMiddleware = require("../middlewares/auth")
/**
 * Posila z databaze psa podle id
 * URL: /dogs/:id
 * Method: GET
 */


router.get('/:id', authMiddleware.checkRoles(["Owner", "Admin"]), dogsController.getDogById);

router.get('/', authMiddleware.auth, authMiddleware.verifyOwnership, dogsController.getDogs);

router.post('/', dogsController.createDog);

router.put('/:id', dogsController.updateDog);

router.delete('/:id', dogsController.deleteDog);

module.exports = router;
