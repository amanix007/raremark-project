const Joi = require("@hapi/joi");
const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;
const siteRepo = require("../../repo/siteRepo");

const getPropertyList = async (req, res) => {
    const responseSchema = Joi.array();
    const userId = res.locals.user.userID;

    try {
        let response = await siteRepo.getSiteList(userId);
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

module.exports = getPropertyList;