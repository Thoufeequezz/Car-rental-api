const getAllCars = (req, res) => {
    res.send('Get all cars')
  }


  const getACarById = (req, res) => {
    res.send('Get a car by ID')
  }

  const addNewCar =(req, res) => {
    res.send('Add a new car (from req.body)')
  }

  const updateCar = (req, res) => {
    res.send('Update an existing car (change availability, price, etc.)')
  }
   
  const removeACarFromTheSystem =(req, res) => {
    res.send('Remove a car from the system')
  }

  module.exports ={
    getAllCars,
    getACarById,
    addNewCar,
    updateCar,
    removeACarFromTheSystem
  }