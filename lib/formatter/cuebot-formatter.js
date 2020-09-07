/*
 * Copyright 2020 Aries Beltran <jonathan.magaru.code@gmail.com>
 * Licensed under the MIT license. See LICENSE.
 *
 * CUEBOT-WEB Formatter | Cucumber
 */
"use strict";

const { JsonFormatter } = require("cucumber");
const terminalSpinner = require("ora");

class CuebotFormatter extends JsonFormatter {
  constructor(options) {
    super(options);

    // Declaring terminal UI spinner
    this.spinner = new terminalSpinner({
      spinner: "dots",
      isEnabled: true,
    });
    this.spinner.passed = this.spinner.succeed;
    this.spinner.failed = this.spinner.fail;
    this.spinner.skipped = this.spinner.info;
    this.spinner.undefined = this.spinner.warn;

    // Setting up Detail Summary Table
    const detailsSummaryTable = new Table({
      head: [
        "Features / Scenarios",
        "Result",
        "Steps",
        "Passed",
        "Failed",
        "Skipped",
        "Unknown",
      ],
      style: {
        head: [],
        border: [],
      },
    });
  }
}
