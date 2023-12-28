const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    username:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true},
    message:{type: String, required: true},
});

const Message = new model("Message", messageSchema);

module.exports = Message;
