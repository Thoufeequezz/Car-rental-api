const express = require('express')
const { getAllCars, getACarById, addNewCar, updateCar, removeACarFromTheSystem } = require('../controllers/carsController')
const router = express.Router()



router.get('/', getAllCars)

router.get('/:id', getACarById)

router.post('/', addNewCar)

router.patch('/:id', updateCar)

router.delete('/:id', removeACarFromTheSystem)

module.exports = router