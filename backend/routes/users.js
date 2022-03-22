const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/users");

/* GET users listing. */
router.get("/", userController.index);
router.get("/:id", userController.show);

module.exports = router;
