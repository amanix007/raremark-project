const sendResponse = require("../helpers/response").sendResponse;
const ResponseStatusType = require("../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../helpers/response").ResponseCodeType;

const avatarValidate = async (req, res, next) => {
    // const fileExts = ["png", "jpg", "jpeg", "gif"];
    // const isAllowedExt = fileExts.includes(req.file.originalname.split(".")[1].toLowerCase());
    // const isAllowedMimeType = req.file.mimetype.startsWith("image/");

    // if (isAllowedExt && isAllowedMimeType) {
    //     next();
    // }
    // else {
    //     return sendResponse(
    //         ResponseStatusType.BadRequestError,
    //         ResponseCodeType.E_INVALID_FILE,
    //         "Please upload correct image file.",
    //         null,
    //         null,
    //         [],
    //         res
    //     );
    // }
};

module.exports = {
    avatarValidate
}