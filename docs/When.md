## When

> Keywords implemented under gherkin pre-word : WHEN

---

### When I click on the page element _{locator}_

_This keyword will execute click event on the given element locator parameter: {locator}_

```gherkin
Scenario: Validate user page access
   Given that a user in on page url 'https://www.facebook.com/'
   When I click on the page element "//a[contains(text(),'Forgot account?')]"
```

_The example above will click on the Forgot Account link (locator is in the form of XPATH)_

```gherkin
Scenario: Validate user page access
   Given that a user in on page url 'https://www.facebook.com/'
   When I click on the page element "._6ltj>a"
```

_The example above will click on the Forgot Account link (locator is in the form of CSS Selector)_

**_Note : This time, use double-quote instead of single-quote in the locator parameter_**

---

### When I entered _{textvalue}_ on text field _{locator}_

_This keyword will enter the {textvalue} on the field {locator}_

```gherkin
Scenario: Test keyword implementation | Given User is on page URL <Page URL>
   Given that a user is on page url 'https://www.facebook.com/'
   When I click the page element "._6ltj>a"
   When I entered 'myemail@mail.com' on text field "#identify_email"
```

_The example above will enter 'myemail@mail.com' on text field having locator '#identify_email'_

**_Note : This time, use double-quote instead of single-quote in the locator parameter_**

**_Note : On locator, you can use either CSS Selector or XPath_**

---
