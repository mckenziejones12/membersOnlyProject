const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  username: { type: String, required: true, minLength: 3 },
  password: { type: String, required: true, minLength: 8 },
});

module.exports = mongoose.model("Member", MemberSchema);
