const authService = require("../service/auth");
const sendResponse = require("../helpers/response").sendResponse;
const ResponseStatusType = require("../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../helpers/response").ResponseCodeType;

const authenticated = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return sendResponse(
            ResponseStatusType.UnauthorizedError,
            ResponseCodeType.E_MISSING_AUTH_TOKEN,
            "No Authorization Header. !!",
            null,
            null,
            [],
            res
        );
    }

    const token = authorizationHeader.split(" ")[1]; // Bearer <token>
    // console.log('token:', token)
    try {


        let user = await authService.verifyAuthToken(token);
        res.locals.user = user;
        res.locals.userId = user.userID;
        next();

    } catch (err) {
        console.log('err:', err)
        return sendResponse(
            ResponseStatusType.UnauthorizedError,
            ResponseCodeType.E_INVALID_AUTH_TOKEN,
            "User is unauthorized !!.",
            null,
            null,
            err,
            res
        );
    }

};

module.exports = {
    authenticated
}