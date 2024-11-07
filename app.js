//import applications all packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import * as path from "path";
import router from "./routes/api.js";
import {
  MONGODB_CONNECTION,
  PORT,
  MAX_JSON_SIZE,
  URL_ENCODED,
  WEB_CACHE,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
} from "./app/config/config.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

app.set("etag", WEB_CACHE);

app.use("/api", router);

app.use(express.static("storage"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
