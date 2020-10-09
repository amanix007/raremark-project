const propertyrepo = require("../repo/propertyrepo");

const getById = async (id) => {
    try {
        let property = await propertyrepo.getById(id);
        return property;

    } catch (error) {
        console.log('error:', error)

    }

};



const createProperty = async (site) => {
    const data = await propertyrepo.createProperty(site);
    return { data };
};




module.exports = {
    createProperty,
    
    getById,
    
};