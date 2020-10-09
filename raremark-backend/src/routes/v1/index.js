const Router = require("express").Router;
const commonRouter = require("./common");


const PropertyRouter = require("./property/property");

const v1 = Router();

v1.use((req, res, next) => {
    console.log("Time:", Date.now(), "==>", req.originalUrl);
    next();
});


v1.use("/", commonRouter);


v1.use("/property", PropertyRouter);

v1.use("*", (req, res) => {
    res.status(404).send({
        code: "ENDPOINT_NOT_FOUND",
        message: "Endpoint not found",
        response: null,
        error: null
    });
});



module.exports = v1;

