import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";

const app = express();
const port = 4000;

//Middleware
import fs from 'fs/promises'; //const fs = require('fs'); //ReferenceError: require is not defined in ES module scope, you can use import instead
async function logging(req, res, next) {
  console.log(
    `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
  );
  try{
    const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`
    await fs.writeFile("logs.txt",text);
  }catch{
    await fs.writeFile("logs.txt",`\nLogging Error on IP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`);
  }
  next();
}
//หน้านี้
app.use(logging);
//Middleware

app.use(bodyParser.json());
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
