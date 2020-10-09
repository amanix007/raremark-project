const Joi = require("@hapi/joi");
const propertyService = require("../../service/propertyService");
const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;
const getProperty = async (req, res) => {
    const schema = Joi.object({
        // id: Joi.string().required(),
    });

    const responseSchema = Joi.object();
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


    const { id } = req.query;

    try {
        let response = await propertyService.getById(id);
        if (response) {
            response.id = id;
            return sendResponse(
                ResponseStatusType.Success,
                ResponseCodeType.SUCCESS,
                "Property Retrieved Successfully.",
                response,
                responseSchema,
                [],
                res
            );

        } else {
            return sendResponse(
                ResponseStatusType.InternalServerError,
                ResponseCodeType.E_ADD_USER,
                "Property Retrieved Failed, Invalid Id",
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
            "Property Retrieved Failed.",
            null,
            null,
            [],
            res
        );
    }

};

module.exports = getProperty;