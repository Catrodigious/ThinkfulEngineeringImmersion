const router = require("express").Router();
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require('cors');

const options = {
  methods: ['GET']
}

const corsMethodAllowed = cors(options);

router
  .route("/:userId")
  .get(corsMethodAllowed, controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .options(corsMethodAllowed)
  .all(methodNotAllowed);

router
  .route("/")
  .get(corsMethodAllowed, controller.list)
  .post(controller.create)
  .options(corsMethodAllowed)
  .all(methodNotAllowed);

module.exports = router;
