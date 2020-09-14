const fsp = require("fs").promises;
const util = require("util");
const { assert } = require("chai");
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
const { Builder, By, until } = require("selenium-webdriver");

setDefaultTimeout(100 * 1000);

Given("that a user is on page url {string}", async function (url) {
  await this.driver.get(url);
});

Given("my search keyword is {string}", async function (keyword) {
  this.searchKeyword = keyword;
});

Before(async function () {
  this.driver = new Builder().forBrowser("chrome").build();
});

When("User navigate to {string}", async function (url) {
  await this.driver.get(url);
});

When("I search the keyword on Google", async function () {
  let urlquery = `https://www.google.com/search?q=${this.searchKeyword}`;
  await this.driver.get(urlquery);
});

When("User landed on the page", async function () {
  //console.log(" When User landed on the page command is executed");
});

Then("User successfully landed on the page", async function () {
  //console.log("Then User successfully landed on the page command is executed");
});

Then("I can see keyword {string} on search result page", async function (
  keyword
) {
  await this.driver.findElement(By.xpath(`//*[contains(text(),'${keyword}')]`));
});

Then("Page element {string} is displayed", async function (element) {
  await this.driver.wait(until.elementLocated(By.id(element)), 10000);
  await this.driver.findElement(By.id(element));
});

Then("I can see the current page url should be {string}", async function (url) {
  let currentUrl = await this.driver.getCurrentUrl();
  assert.deepEqual(currentUrl, url);
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
