const express = require("express");
const router = express.Router();
const work = require("../models/work");
const {
  createWorkout,
  singleWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workControllers");

// get all workout
router.get("/", getAllWorkout);

// get a single workout

router.get("/:id", singleWorkout);

// post a new workout

router.post("/", createWorkout);

// delete a workout

router.delete("/:id",deleteWorkout);

// update  workout

router.patch("/:id",updateWorkout);

module.exports = router;
