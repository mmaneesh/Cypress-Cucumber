// const report = require("multiple-cucumber-html-reporter");
// report.generate({
//     jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
//     reportPath: "cypress/reports", // ** Path of .html file **//
//     reportSuiteAsScenarios: true,
//     scenarioTimestamp: true,
//     metadata: {
//         browser: {
//             name: "chrome",
//             version: "92",
//         },
//         device: "Local test machine",
//         platform: {
//             name: "windows",
//             version: "10",
//         },
//     },
// });

let reporter = require('cucumber-html-reporter');

let options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/PowerApp-TestReport.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "STAGING",
        "Browser": "Chrome  98",
        "Platform": "Windows 10"
    }
};

reporter.generate(options);