const mongoose = require('mongoose');
const Tasks = new mongoose.Schema({
    name : {
        require : true,
        type: String
    },
    last : {
        require : true,
        type: String
    },
    buy : {
        require : true,
        type: String
    },
    sell : {
        require : true,
        type: String
    },
    volume: {
        require : true,
        type: String
    },
    base_unit : {
        require : true,
        type: String
    }
})
module.exports = mongoose.model("Tasks",Tasks);