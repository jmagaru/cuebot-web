/*
 * Copyright 2020 Jonathan Magaru <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * Cuebot-web | Script Initialization with sample scripts
 */
const fs = require("fs");

module.exports.default = () => {
  // Initiate folder creation
  const featureLocation = "./features";
  const reportLocation = "./reports";

  process.stdout.write("Creating features folder...");
  if (!fs.existsSync(featureLocation)) {
    fs.mkdirSync(featureLocation);
    process.stdout.write("done.\n");
  } else {
    process.stdout.write("already exists.\n");
  }

  // Creating sample feature file
  process.stdout.write("Creating initial feature...");
  let feature_template =
    "@cuebot \nFeature: My Sample Feature\n" +
    "\tAs Automation engineer\n" +
    "\tI want to verify that all functionality are working as they should\n\n" +
    "\t@sample\n" +
    "\tScenario: My Sample Scenario\n" +
    "\t\tGiven my search keyword is 'YouTube'\n" +
    "\t\tWhen I search the keyword on Google\n" +
    "\t\tThen I can see keyword 'YouTube' on search result page\n\n" +
    "";

  fs.writeFileSync(featureLocation + "/sample.feature", feature_template);
  process.stdout.write("done.\n");
};
