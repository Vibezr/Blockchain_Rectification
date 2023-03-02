const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const connectDB = async () => {
    const {MONGO_URI} = process.env
    return mongoose.connect(MONGO_URI, {
    
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
}

module.exports = connectDB