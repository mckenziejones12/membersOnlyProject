const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  timestamp: { type: Date },
  message: { type: String, required: true, minLength: 1, maxLenth: 200 },
  memberId: { type: Schema.Types.ObjectId, ref: "Member" },
});

module.exports = mongoose.model("Message", MessageSchema);
