require("dotenv").config();

const Message = require("./models/message");
const Member = require("./models/member");

const messages = [];
const members = [];

const mongoose = require("mongoose");
const { mainModule } = require("process");
mongoose.set("strictQuery", false);

const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);

  console.log("Debug: Should be connected?");
  await createMembers();
  await createMessages();

  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function messageCreate(index, timestamp, msg, memberId) {
  const messageDetail = {
    timestamp: timestamp,
    memberId: memberId,
  };
  if (msg != false) {
    messageDetail.message = msg;
  }

  const message = new Message(messageDetail);
  messages[index] = message;

  await message.save();
  console.log(`Added message: ${message}`);
}

async function memberCreate(index, username, password) {
  const memberDetail = {
    username: username,
    password: password,
  };
  const member = new Member(memberDetail);
  members[index] = member;
  await member.save();
  console.log(`Added member: ${username}`);
}

async function createMessages() {
  console.log("Adding Messages");
  await Promise.all([
    messageCreate(
      0,
      new Date("February 4, 2024"),
      "This is my first message.",
      members[0]
    ),
    messageCreate(
      1,
      new Date("March 1, 2024"),
      "This is my second message.",
      members[1]
    ),
  ]);
}

async function createMembers() {
  console.log("Adding Members");
  await Promise.all([
    memberCreate(0, "shrimp22", "milkbones"),
    memberCreate(1, "iAmTheMom", "iloveshrimp"),
  ]);
}
