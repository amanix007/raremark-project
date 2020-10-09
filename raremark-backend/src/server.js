const app = require("./app");
const sequelize = require("./config/sequelize");
const config = require("./config/config");


// sequelize.authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


const port = config.PORT ? config.PORT : 1338;

// make sure the app can talk to the database server
// :->TODO product environment tweak later
const connectAndSyncDB = (numberOfRetry) => new Promise((resolve, reject) => {
    let attempts = 1;
    const retry = (n) => {
        return sequelize
            .authenticate()
            .then(() => {
                console.log("Database Connection has been established successfully.");
                // development purpose
                sequelize.query("SET FOREIGN_KEY_CHECKS = 0", { raw: true }).then(function () {
                    // sequelize.sync({ force: true, logging: console.log }).then(() => {
                    //     console.log("Database sync with model for development env.");
                    //     resolve(null);
                    // });
                    sequelize.sync({ force: false, logging: console.log }).then(() => {
                        console.log("Database sync with model for development env.");
                        resolve(null);
                    });
                });
            }).catch(e => {
                console.log("couldnt connect to database", e);
                if (n === 1) {
                    throw reject("Error connecting database");
                } else {
                    console.log("Retryng again: ");
                    console.log("With delay " + attempts * 3000);
                    setTimeout(() => {
                        attempts++;
                        retry(n - 1);
                    }, attempts * 3000);
                }
            });

    };
    return retry(numberOfRetry);
});


connectAndSyncDB(10).then(() => {
    console.log("connected and synced db");
    app.listen(port, () => {
        console.log("raremark Public API IS RUNNING: " + port);

    });


    // https.createServer({
    //     key: fs.readFileSync('server.key'),
    //     cert: fs.readFileSync('server.cert')
    // }, app)
    //     .listen(port, function () {
    //         console.log("raremark Public API IS RUNNING: " + port);
    //     })

}).catch((e) => {
    console.log('server.js', e);
    process.exit(1);
});