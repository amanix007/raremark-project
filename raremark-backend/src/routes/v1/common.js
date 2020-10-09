const Router = require("express").Router;
const home = require("../../controller/common").home;
const commonRouter = Router();

commonRouter.get("/", home);

module.exports = commonRouter;