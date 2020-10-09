const Joi = require("@hapi/joi");
const propertyService = require("../../service/propertyService");

const sendResponse = require("../../helpers/response").sendResponse;
const ResponseStatusType = require("../../helpers/response").ResponseStatusType;
const ResponseCodeType = require("../../helpers/response").ResponseCodeType;

const createProperty = async (req, res) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required(),

        availableDateStart: Joi.string().required(),
        availableDateEnd: Joi.string().required(),
        propertyType: Joi.string().required(),
    });

    const responseSchema = Joi.object({
        site: Joi.object()
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

    const { title,
        description,
        location,
        availableDateStart,
        availableDateEnd,
        propertyType, price } = req.body;




    try {
        const propertyData = {
            title,
            description,
            location,
            availableDateStart,
            availableDateEnd,
            propertyType, price
        }
        const response = await propertyService.createProperty(propertyData);

        return res.status(200).send({
            code: 200,
            message: "Property Created Successfully !",
            response: response,
            errors: []
        });

        return sendResponse(
            ResponseStatusType.Success,
            ResponseCodeType.SUCCESS,
            "Property Create Successfully Completed.",
            response,
            responseSchema,
            [],
            res
        );


    } catch (error) {
        console.log('create-site error:', error)
        return sendResponse(
            ResponseStatusType.InternalServerError,
            ResponseCodeType.E_ADD_USER,
            "Property Create Failed.",
            null,
            null,
            [],
            res
        );
    }




};
module.exports = createProperty;