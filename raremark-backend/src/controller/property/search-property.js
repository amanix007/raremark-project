const Joi = require("@hapi/joi");
const propertyrepo = require("../../repo/propertyrepo");
const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;


const searchProperty = async (req, res) => {
    const responseSchema = Joi.any();
    const { s, page, size } = req.query;
    console.log('s:', s)

    try {
        let response = await propertyrepo.searchProperty(s, page, size);

       

        if (response) {
            return sendResponse(
                ResponseStatusType.Success,
                ResponseCodeType.SUCCESS,
                "Property List Retrieved Successfully.",
                response,
                responseSchema,
                [],
                res
            );

        } else {
            return sendResponse(
                ResponseStatusType.InternalServerError,
                ResponseCodeType.E_ADD_USER,
                "Property List Retrieved Failed, Invalid Id",
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
            "Property List Retrieved Failed.",
            null,
            null,
            [],
            res
        );
    }

};

module.exports = searchProperty;