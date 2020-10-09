

const sequelize = require("./config/sequelize");


const Property = require("./models/property");

// const migrationStatus = process.argv[2];
const migrationStatus = "up";

const migrationTypeUP = "up";
const migrationTypeDOWN = "down";

if (!migrationStatus || (migrationStatus !== migrationTypeUP) && (migrationStatus !== migrationTypeDOWN)) {
    throw new Error("please provide a valid arguments. Either 'up' or 'down' ");
}

const syncAllModel = () => {
    Property.findByPk(1);
    
    
};

const printErrorAndExit = (businessErrMessage, err) => {
    syncAllModel();
    console.error(businessErrMessage);
    console.error(err.message);
    process.exit(1);
};

const printSuccessAndExit = (businessSuccessMessage) => {
    console.error(businessSuccessMessage);
    process.exit(0);
};

if (migrationStatus === migrationTypeUP) {
    sequelize.sync({
        force: true
    }).then(() => {

    
        
        printSuccessAndExit("migrated up successfully!")

    }).catch((e) => {
        printErrorAndExit("failed to migrate up!", e);
    });


}

if (migrationStatus === migrationTypeDOWN) {
    sequelize.drop().then(() => printSuccessAndExit("migrated down successfully!")).catch((e) => {
        printErrorAndExit("failed to migrate down!", e);
    });
}

