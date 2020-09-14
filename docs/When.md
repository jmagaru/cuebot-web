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
