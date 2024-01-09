import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./apps/logging.js";
import Validate from "./middlewares/assignmentValidation.js"
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(logging);
app.use(Validate)
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
