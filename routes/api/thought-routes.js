const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:userid").post(createThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(createThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions/").post(addReaction);
router.route("/:thoughtId/reactions/").delete(deleteReaction);

module.exports = router;
