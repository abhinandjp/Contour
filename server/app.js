require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./Routes/userRouter")
const contractorRouter =  require("./Routes/contractorRouter")
const adminRouter =  require("./Routes/adminRouter")
// const adminRouter = require("./Routes/adminRouter")

const cors = require("cors");
const { connectToDb } = require("./config/db");

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/contractor",contractorRouter);
app.use("/admin",adminRouter)
// app.use("/admin",adminRouter)
    
connectToDb(() => {
  app.listen(process.env, () => {
    console.log("server started at Port", process.env.PORT);
  });
});
