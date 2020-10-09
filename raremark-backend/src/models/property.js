const Model = require("sequelize").Model;
const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../config/sequelize");
;

class Property extends Model { }

Property.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    // picture: {
    //     type: new DataTypes.STRING,
    //     validate: {
    //         notEmpty: true,
    //     },
    //     allowNull: true
    // },
    description: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    price: {
        type: new DataTypes.INTEGER,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    location: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    availableDateStart: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    availableDateEnd: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },
    propertyType: {
        type: new DataTypes.STRING,
        validate: {
            notEmpty: false,
        },
        allowNull: true
    },



}, {
    tableName: "Property",
    freezeTableName: true,
    timestamps: true,
    underscored: false,
    sequelize,
    modelName: "Property"
});

// Property.hasMany(Page, { sourceKey: "id" });
// Page.belongsTo(Property, { targetKey: "id" });

module.exports = Property;