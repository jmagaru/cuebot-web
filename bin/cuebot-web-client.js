/*
 * Copyright 2020 Jonathan Magaru <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * CUEBOT-WEB CucumberJS Wrapper
 */

const path = require("path");
const fs = require("fs");
const colors = require("chalk");

module.exports.default = () => {
  console.log(`[TEST] -  Executing Cucumber client JS`);

  // Returning Exit Code
  return new Promise(function (resolve, reject) {
    try {
      return cli
        .run()
        .then((result) => resolve(result.success === true ? 0 : 1));
    } catch (e) {
      return reject(e);
    }
  });
};
