const Joi = require("@hapi/joi");
const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;
const siteService = require("../../service/propertyService");

const deleteProperty = async (req, res) => {
    const schema = Joi.object({
        id: Joi.any().required(),
        subDomain: Joi.string().required(),
    });
    console.log('req.body:', req.body)

    const responseSchema = Joi.number();
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


    const { id, subDomain } = req.body;

    try {

        let response = await siteService.deleteProperty(id, subDomain);


        if (response) {
            return sendResponse(
                ResponseStatusType.Success,
                ResponseCodeType.SUCCESS,
                "Property Deleted Successfully.",
                response,
                responseSchema,
                [],
                res
            );

        } else {
            return sendResponse(
                ResponseStatusType.InternalServerError,
                ResponseCodeType.E_ADD_USER,
                "Property Delete Failed",
                null,
                null,
                [],
                res
            );
        }


    } catch (error) {
        console.log('error:', error)
        return sendResponse(
            ResponseStatusType.InternalServerError,
            ResponseCodeType.E_ADD_USER,
            "Property Delete Failed.",
            null,
            null,
            [],
            res
        );
    }

};

module.exports = deleteProperty;