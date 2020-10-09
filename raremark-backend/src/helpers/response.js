const Response = require("express").Response;
const Schema = require("@hapi/joi").Schema;
const ResponseStatusType = {
    Success: 200,
    BadRequestError: 400,
    UnauthorizedError: 401,
    PaymentRequiredError: 402,
    ForbiddenError: 403,
    NotFoundError: 404,
    MethodNotAllowedError: 405,
    NotAcceptableError: 406,
    ProxyAuthenticationRequiredError: 407,
    RequestTimeoutError: 408,
    ConflictError: 409,
    GoneError: 410,
    LengthRequiredError: 411,
    PreconditionFailedError: 412,
    RequestEntityTooLargeError: 413,
    RequesturiTooLargeError: 414,
    UnsupportedMediaTypeError: 415,
    RequestedRangeNotSatisfiableError: 416,
    ExpectationFailedError: 417,
    ImATeapotError: 418,
    UnprocessableEntityError: 422,
    LockedError: 423,
    FailedDependencyError: 424,
    UnorderedCollectionError: 425,
    UpgradeRequiredError: 426,
    PreconditionRequiredError: 428,
    TooManyRequestsError: 429,
    RequestHeaderFieldsTooLargeError: 431,
    InternalServerError: 500,
    NotImplementedError: 501,
    BadGatewayError: 502,
    ServiceUnavailableError: 503,
    GatewayTimeoutError: 504,
    HttpVersionNotSupportedError: 505,
    VariantAlsoNegotiatesError: 406,
    InsufficientStorageError: 507,
    BandwidthLimitExceededError: 509,
    NotExtendedError: 510,
    NetworkAuthenticationRequiredError: 511,
    BadDigestError: 400,
    BadMethodError: 405,
    InternalError: 500,
    InvalidArgumentError: 409,
    InvalidContentError: 400,
    InvalidCredentialsError: 401,
    InvalidHeaderError: 400,
    InvalidVersionError: 400,
    MissingParameterError: 409,
    NotAuthorizedError: 403,
    RequestExpiredError: 400,
    RequestThrottledError: 429,
    ResourceNotFoundError: 404,
    WrongAcceptError: 406
}

const ResponseCodeType = {
    E_MISSING_DATA: "E_MISSING_DATA",
    E_ADD_USER: "E_ADD_USER",
    SUCCESS: "SUCCESS",
    E_INVALID_CREDENTIALS: "E_INVALID_CREDENTIALS",
    E_MISSING_TOKEN: "E_MISSING_TOKEN",
    E_INVALID_TOKEN: "E_INVALID_TOKEN",
    E_MISSING_EMAIL: "E_MISSING_EMAIL",
    E_ADD_FLIGHT: "E_ADD_FLIGHT",
    E_ADD_HOLIDAY: "E_ADD_HOLIDAY",
    E_ADD_HOTEL: "E_ADD_HOTEL",
    E_ADD_PASSENGER: "E_ADD_PASSENGER",
    E_UPDATE_PASSENGER: "E_UPDATE_PASSENGER",
    E_INVALID_AUTH_TOKEN: "E_INVALID_AUTH_TOKEN",
    E_MISSING_AUTH_TOKEN: "E_MISSING_AUTH_TOKEN",
    E_SEND_MAIL: "E_SEND_MAIL",
    E_LOGIN_USER: "E_LOGIN_USER",
    E_ADD_SHARE: "E_ADD_SHARE",
    E_UPDATE_PROFILE: "E_UPDATE_PROFILE",
    E_CHANGE_PASSWORD: "E_CHANGE_PASSWORD",
    E_FORGET_PASSWORD: "E_FORGET_PASSWORD",
    E_RESET_PASSWORD: "E_RESET_PASSWORD",
    E_INVALID_FILE: "E_INVALID_FILE"
}

const sendResponse = async (
    status,
    code,
    message,
    data,
    schema,
    errors,
    res,
) => {
    if (!schema) {
        return res.status(status).send({
            code: code,
            message: message,
            response: null,
            errors: errors
        });
    }

    const { error, value } = schema.validate(data, { stripUnknown: true });
    if (error) {
        return res.status(ResponseStatusType.BadRequestError).send({
            code: ResponseCodeType.E_MISSING_DATA,
            message: "Missing required response fields.",
            response: null,
            errors: error.details
        });
    }

    return res.status(status).send({
        code: code,
        message: message,
        response: value,
        errors: errors
    });
};

module.exports = {
    ResponseStatusType,
    ResponseCodeType,
    sendResponse
}