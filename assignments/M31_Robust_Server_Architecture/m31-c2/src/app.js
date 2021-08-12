const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

app.use('/users/:userId', (req, res, next)=>{
  const { userId } = req.params;
  const user = users.find((user)=>user.id == userId);
  if (user) res.send({data: user})
  next(`User ID not found: ${userId}`);
})

app.use('/users', (req, res, next)=>{
  res.send({data: users});
})

// Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.use("/states/:stateCode", (req, res, next)=>{
  let { stateCode } = req.params;
  stateCode = stateCode.toUpperCase();
  const stateData = {data: {}};

  for (state in states){
    console.log(state);
    if (state === stateCode){
      stateData.data = {
          stateCode,
          name: states[state]
      }
      break;
    }
  }
  if (stateData.data.stateCode) res.send(stateData);
  next(`State code not found: ${stateCode}`);
});

// return all states from /states in the form of { data: Array }
app.use('/states', (req, res, next)=>{
  res.send({data: states});
})

// add not found handler
app.use((req, res, next) => {
  res.send(`Not found: ${req.originalUrl}`);
})

app.use((err, req, res, next) => {
  res.send(err);
})

module.exports = app;
