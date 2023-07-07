const messageModel = require("../model/MessageModel");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      message: {text: message},
        users: [from, to],
        sender: from,
    });
    if(data) return res.json({message: "Message sent successfully"});
    return res.json({message: "Message not sent"});
  } catch (ex) {
    next(ex);
  }
};
module.exports.getMessage = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const message = await messageModel.find({
            users: { $all: [from, to] },
        }).sort({ updatedAt: 1 });
        const projectMessages = message.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            }
        })
        return res.json(projectMessages);
    } catch (ex) {
        next(ex)
    }
};
