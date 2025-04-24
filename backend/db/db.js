const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb+srv://khushi087singh:KU8yRYdtoK4SyEJ8@cluster0.wupg8we.mongodb.net/')
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}
