const Message = require("../models/message-model");


const messageMe = async(req, res) =>{

        try {
            const response = req.body;
            console.log(response);
            await Message.create(response);
            return res.status(200).json({ message: "Message sent successfully!!!"});
        } catch (error) {
            return res.status(500).json({ message: "Message failed to send!!!"});
            // return res.status(500).json(extraDetails);

            // next(error);
        }
    
};

module.exports = messageMe;