const Op = require("sequelize").Op;
const path = require('path');
const fs = require('fs');
const sequelize = require("../config/sequelize");
const Property = require("../models/property");






const name = "Property Repo";




const createProperty = async (property) => {
    const transaction = await sequelize.transaction({});
    try {
        const newProperty = await Property.create({ ...property }, { transaction });
        // console.log('TemplateInfo:', TemplateInfo)
        await transaction.commit();
        return { newProperty };

    } catch (e) {
        // console.log('e:', e)
        await transaction.rollback();
        throw e;
    }
};
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: properties } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, properties, totalPages, currentPage };
};
const searchProperty = async (s, page, size) => {
    const transaction = await sequelize.transaction({});
    const { limit, offset } = getPagination(page, size);
    var condition = s ? {
        location: { [Op.like]: `%${s}%` },
        // title: { [Op.like]: `%${s}%` }
    } : null;

    try {
        const data = await Property.findAndCountAll({ where: condition, limit, offset }, { transaction });
        // console.log('TemplateInfo:', TemplateInfo)
        await transaction.commit();
        return getPagingData(data, page, limit);


    } catch (e) {
        // console.log('e:', e)
        await transaction.rollback();
        throw e;
    }
};

// const getBySubDomain = async (subDomain) => {
//     return Site.findOne({
//         where: {
//             subDomain: subDomain,

//         }
//     });
// };

const getById = async (id) => {


    const transaction = await sequelize.transaction({});
    try {

        let propertie = await Property.findOne({
            where: {
                id: id,
            }, transaction
        });
        return propertie
    } catch (error) {
        // console.log('error:', error)

    }

};






module.exports = {
    getById,
    createProperty,
    searchProperty,
    
    
};