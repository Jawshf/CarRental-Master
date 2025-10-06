const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongoUrl).then(
    ()=>{
        console.log("DB connected...")
    })
