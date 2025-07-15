import express from "express";
import { check } from "express-validator";

import usersControllers from "../controllers/users-controllers.js";
import fileUpload from "../middleware/file-upload.js";

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup,
);

router.post("/login", usersControllers.login);

export default router;
