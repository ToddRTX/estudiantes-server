const mongoose = require('mongoose')
// Allow Promises
mongoose.Promise = global.Promise
// Connection
mongoose.connect(
	'mongodb+srv://root:root@cluster0.yqpcdpr.mongodb.net/?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
)
// Validation
mongoose.connection
	.once('open', () => console.log('Connected to the database!'))
	.on('error', (err) => console.log('Error with the database!', err))
