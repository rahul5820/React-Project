const express = require("express");
const app = express();
const userInfoSchema = require("./userModel");

app.get("/", function (req, res) {
  res.send("working fine");
});

//create
app.get("/create", async function (req, res) {
  let craetedUserInfo = await userInfoSchema.create({
    name: "Zoro",
    username: "Ha_BacchaZoro11",
    email: "bz124@gmail.com",
  });

  res.send(craetedUserInfo);
});

//read

app.get("/read", async (req, res) => {
  let users = await userInfoSchema.find();
  res.send(users);
});

//update

app.get("/update", async (req, res) => {
  let updatedUserInfo = await userInfoSchema.findOneAndUpdate(
    {
      username: "Ha_BaCChaRaHuL_Zorii",
    },
    { name: "Rahul Das" },
    { new: true }
  );
  res.send(updatedUserInfo);
});

//delete

app.get("/delete", async (req, res) => {
  let users = await userInfoSchema.findOneAndDelete({  username: "Ha_BacchaZoro11"});
  res.send(users)
}
);

app.listen(3173);
