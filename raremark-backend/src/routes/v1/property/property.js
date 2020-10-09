
const Router = require("express").Router;
const createProperty = require("../../../controller/property/create-property");
const getProperty = require("../../../controller/property/get-property");
const searchProperty = require("../../../controller/property/search-property");





const Property = Router();


// Property endpoints
Property.post("/create-property",  createProperty);
// Property.get("/get-property",  getProperty);
// Property.get("/get-property-list",  getproPertyList);
// Property.delete("/delete-property",  deleteProperty);
// Property.post("/update-property-subdomain",  updatePropertySubdomain);
Property.get("/search-property",  searchProperty);
Property.get("/get-property",  getProperty);




module.exports = Property;