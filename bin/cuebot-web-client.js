/*
 * Copyright 2020 Jonathan Magaru <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * CUEBOT-WEB CucumberJS Wrapper
 */

const path = require("path");
const fs = require("fs");
const colors = require("chalk");

module.exports.default = ({ specs, tags }) => {
  // Recreating screenshot folders
  if (!fs.existsSync("reports/snapshots")) {
    fs.mkdirSync("reports/snapshots", { recursive: true });
  }

  // writeFile report json file default
  if (!fs.existsSync("reports/cuebot-web-report.json")) {
    fs.writeFile("reports/cuebot-web-report.json", "[]", function (err) {
      if (err) throw err;
    });
  }

  // writeFile report html file default
  if (!fs.existsSync("reports/cuebot-web-report.html")) {
    fs.writeFile("reports/cuebot-web-report.html", "[]", function (err) {
      if (err) throw err;
    });
  }

  //Defining Library folder

  let cuebotWebPath = path.resolve(__dirname, "../lib/");

  // Catenate Client options
  let clientOptions = ["", ""];
  if (specs) clientOptions = clientOptions.concat([specs]);

  clientOptions = clientOptions.concat([
    `--require=${cuebotWebPath}/steps/web/test-steps.js`,
    `--format=json:reports/cuebot-web-report.json`,
  ]);

  if (tags) clientOptions = clientOptions.concat(["--tags", `${tags}`]);

  let client = new (require("cucumber").Cli)({
    argv: clientOptions,
    cwd: process.cwd(),
    stdout: process.stdout,
  });

  // Returning Exit Code
  return new Promise(function (resolve, reject) {
    try {
      return client
        .run()
        .then((result) => resolve(result.success === true ? 0 : 1));
    } catch (e) {
      return reject(e);
    }
  });
};
