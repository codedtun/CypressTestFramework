const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const sqlServer = require("cypress-sql-server");

// const sqlServer = require("cypress-sql-server");
// const dbConfig = require("package.json");
// const mysql = require("mysql");
// function queryTestDb(query, config) {
//   //creates a new mysql connection using credentials from package.json
//   const connection = mysql.createConnection(config.db);
//   //start connection to db
//   connection.connect();
//   //exec query + disconnect to db as a promise
//   return new Promise((resolve, reject) => {
//     connection.query(query, (error, results) => {
//       if (error) reject(error);
//       else {
//         connection.end();
//         return resolve(results);
//       }
//     });
//   });
// }

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // tasks = sqlServer.loadDBPlugin(dbConfig.db);
      // on("task", tasks);
      // implement node event listeners here
      //return require("./cypress/plugins/index.js")(on, config);
      config.db = {
        userName: "cypressautomationdb",
        password: "Ambition101#",
        server: "cypressautomationdb.database.windows.net",
        options: {
          database: "cypressautomationdb",
          encrypt: true,
          rowCollectionOnRequestCompletion: true,
        },
      };
      const tasks = sqlServer.loadDBPlugin(config.db);
      on("task", tasks);
      return config;
    },
    //specPattern: "cypress/integration/framework/*.js",
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx,feature}",
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    reporter: "mochawesome",
    env: {
      baseUrl: "https://rahulshettyacademy.com",
      video: false,
    },
    retries: {
      runMode: 1,
    },
    projectId: "f51e9d",
  },
});
