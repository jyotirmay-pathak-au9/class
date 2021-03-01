const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social_media_app');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error in DB'));
db.once('open', () => {
    console.log('DB connected successfully');
})

