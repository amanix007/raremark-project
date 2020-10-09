const Joi = require("@hapi/joi");
const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;
const updateSubdomain = require("../../service/subdomainServices").updateSubdomain;

const updateProperty = async (req, res) => {
    const schema = Joi.object({
        siteId: Joi.number().required(),
        subDomain: Joi.string().required(),
    });

    const responseSchema = Joi.object({
        subDomain: Joi.string().required()

    });
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        return sendResponse(
            ResponseStatusType.BadRequestError,
            ResponseCodeType.E_MISSING_DATA,
            "Please fill up all the required fields from here.",
            null,
            null,
            error.details,
            res
        );
    }

    const { siteId, subDomain } = req.body;
    try {
        let response = true;
        if (process.env.environment === "production") {
            console.log("from production")
            response = await updateSubdomain(subDomain, siteId);
        }

        return sendResponse(
            ResponseStatusType.Success,
            ResponseCodeType.SUCCESS,
            "Subdomain Update Successfully Completed.",
            response,
            responseSchema,
            [],
            res
        );


    } catch (error) {
        console.log('error:', error)
        return sendResponse(
            ResponseStatusType.InternalServerError,
            ResponseCodeType.E_ADD_USER,
            "Subdomain Update Failed.",
            null,
            null,
            [],
            res
        );
    }




};

module.exports = updateProperty;