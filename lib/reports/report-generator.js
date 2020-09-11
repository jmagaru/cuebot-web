var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  name: "IPC Web",
  brandTitle: "Automated Functional Test Report",
  storeScreenshots: true,
  scenarioTimestamp: true,
  columnLayout: 1,
  jsonFile: "reports/cuebot-web-report.json",
  output: "reports/cuebot-web-report.html",
  screenshotsDirectory: "reports/snapshots/",
  noInlineScreenshots: true,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
