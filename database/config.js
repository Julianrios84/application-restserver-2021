const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGODB, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    })

    console.log('Connect database success')

  } catch (error) {
    console.log(error)
    throw new Error('Error connect database')
  }
}

module.exports = { dbConnection }