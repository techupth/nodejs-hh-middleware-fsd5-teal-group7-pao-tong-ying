import fs from "fs/promises";
import moment from "moment";

const logging = async (req, res, next) => {
  try {
    req.requestTime = moment().format("MMMM Do YYYY, h:mm:ss a");
    const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl} Times:${req.requestTime}`;
    await fs.appendFile("./data/logs.txt", text);
  } catch {
    await fs.appendFile(
      "./data/logs.txt",
      `\nlogging error on IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );
  }
  next();
};

export default logging;
