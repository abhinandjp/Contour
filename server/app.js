require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./Routes/userRouter")
const contractorRouter =  require("./Routes/contractorRouter")
const adminRouter =  require("./Routes/adminRouter")
// const adminRouter = require("./Routes/adminRouter")
const path = require('path');

const cors = require("cors");
const { connectToDb } = require("./config/db");

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/contractor",contractorRouter);
app.use("/admin",adminRouter)
// app.use("/admin",adminRouter)

// for sever
app.use(express.static(path.join(__dirname, '../contour-project/build/')));
// for sever

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../contour-project/build/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});
    
connectToDb(() => {
  app.listen(process.env, () => {
    console.log("server started at Port", process.env.PORT);
  });
});
