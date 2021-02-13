const { connect } = require('mongoose')
const config = require('./config.json')

// Local db mongodb://127.0.0.1:27017/perch

const connectDb = () =>
    connect(`mongodb+srv://${config.username}:${config.password}@cluster0.uxufv.mongodb.net/${config.dbName}?retryWrites=true&w=majority`, {useNewUrlParser: true})
        .then(console.log('Now connected to mongodb database'))
        .catch(err => console.error('Could not connect to database ', err.message))

module.exports = connectDb;