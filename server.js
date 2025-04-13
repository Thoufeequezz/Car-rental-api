const express = require('express')
const app = express()
const port = 3000
const carsRoutes = require ('./routes/carsRoutes')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/cars', carsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})