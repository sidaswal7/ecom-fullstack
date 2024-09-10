const express = require(`express`);
const mongoose = require(`mongoose`);
const User = require(`./models/users`);


//database connection
mongoose
  .connect("mongodb://localhost:27017/ecom")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Welcome to Home");
});
app.post("/signup",(req,res)=>{
    res.send("User signed up successfully")
})

//Error handling
app.use((req, res) => {
  res.send("Page Not Found!");
});

app.listen(3000, () => console.log("server running on 3k"));
