const express = require("express");
const router = express();
const notesController = require("../app/controllers/notesControllers");
const categoryController = require("../app/controllers/categoryControllers");

router.get("/notes", notesController.list);
router.get("/notes/:id", notesController.show);
router.post("/notes", notesController.create);
router.put("/notes/:id", notesController.update);
router.delete("/notes/:id", notesController.destroy);

router.get("/category", categoryController.list);
router.get("/category/:id", categoryController.show);
router.post("/category", categoryController.create);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.destroy);

module.exports = router;
