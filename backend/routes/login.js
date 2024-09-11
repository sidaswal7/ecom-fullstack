const express = require(`express`);

const User = require(`../models/users`);
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password");
      console.log(user);
      if (user) {
        res.send(user);
      } else {
        res.send("No user Found!");
      }
    }else {
        res.send("No user Found!");
      }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
