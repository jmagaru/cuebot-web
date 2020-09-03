const fsp = require("fs").promises;
const util = require("util");
const open = require("open");
const {
  Before,
  Given,
  When,
  Then,
  After,
  setDefaultTimeout,
  Status,
  AfterAll,
} = require("cucumber");

const chrome = require("ChromeDriver");
const assert = require("assert");
const { Builder, By, until } = require("selenium-webdriver");
const chalk = require("chalk");
const { exec } = require("child_process");
const path = require("path");

setDefaultTimeout(100 * 1000);

async function launchReport() {
  let cuebotWebPath1 = path.resolve(
    __dirname,
    "../../reports/report-generator.js"
  );
  exec(`node ${cuebotWebPath1}`);
  //await open("reports/cuebot-web-report.html", { wait: true });
}

Before(async function () {
  this.driver = new Builder().forBrowser("chrome").build();
  console.log(
    "\n" +
      chalk.blue.bgWhite.bold("TESTING: ") +
      chalk.white.bgBlack.bold(" console.log() should not break the report")
  );
});

When("User navigate to {string}", async function (url) {
  console.log(`User navigate to {url} command is executed`);
  await this.driver.get(url);
});

When("User landed on the page", async function () {
  console.log(" When User landed on the page command is executed");
});

Then("User successfully landed on the page", async function () {
  console.log("Then User successfully landed on the page command is executed");
});

Then("Page element {string} is displayed", async function (element) {
  await this.driver.wait(until.elementLocated(By.id(element)), 10000);
  await this.driver.findElement(By.id(element));
});

After(async function (testCase) {
  if (testCase.result.status === Status.FAILED) {
    let world = this;

    await this.driver.takeScreenshot(true).then(function (buffer) {
      return world.attach(buffer, "image/png");
    });
  }

  this.driver.close();
});

AfterAll(async () => {
  await launchReport();
});
