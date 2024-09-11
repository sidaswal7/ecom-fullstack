const express = require(`express`);
const mongoose = require(`mongoose`);
const User = require(`./models/users`);
const usersRouter = require(`./routes/signup`);
const loginRouter = require(`./routes/login`);
const cors = require('cors');

//database connection
mongoose
  .connect("mongodb://localhost:27017/ecom")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const app = express();


//middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',            
    allowedHeaders: 'Content-Type',   
    credentials: true                 
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send("Welcome to Home");
});

//routing middlewares
app.use("/signup", usersRouter);
app.use("/login", loginRouter);
//Error handling
app.use((req, res) => {
  res.send("Page Not Found!");
});

//custom error handler
app.use((err, req, res, next) => {
    res.send(err);
  });
app.listen(4000, () => console.log("server running on 4k"));
