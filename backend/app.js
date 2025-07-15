import fs from "fs";
import path from "path";

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import placesroutes from "./routes/places-routes.js";
import usersroutes from "./routes/users-routes.js";
import httperror from "./models/http-error.js";

dotenv.config();

//⚠️ Environment Configuration Required
const MongoUrl = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS",
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use("/api/places", placesroutes);
app.use("/api/users", usersroutes);

app.use((req, res, next) => {
  const error = new httperror("Could not find this route!", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An error occurred!" });
});

mongoose
  .connect(MongoUrl)
  .then(() => {
    console.log("connected to database");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });
