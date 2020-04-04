const express = require("express");
const router = express();
const notesController = require("../app/controllers/notesControllers");
const categoryController = require("../app/controllers/categoryControllers");
const usersController = require("../app/controllers/usersController");
const { authenticateUser } = require("../app/middlewares/authentication");

router.get("/notes", authenticateUser, notesController.list);
router.get("/notes/:id", authenticateUser, notesController.show);
router.post("/notes", authenticateUser, notesController.create);
router.put("/notes/:id", authenticateUser, notesController.update);
router.delete("/notes/:id", authenticateUser, notesController.destroy);

router.get("/category", authenticateUser, categoryController.list);
router.get("/category/:id", authenticateUser, categoryController.show);
router.post("/category", authenticateUser, categoryController.create);
router.put("/category/:id", authenticateUser, categoryController.update);
router.delete("/category/:id", authenticateUser, categoryController.destroy);

router.post("/signup", usersController.signup);
router.post("/signin", usersController.signin);
router.get("/account", authenticateUser, usersController.account);
router.delete("/logout", authenticateUser, usersController.logout);

module.exports = router;
