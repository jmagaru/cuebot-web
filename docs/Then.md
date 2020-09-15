## Then

> Keywords implemented under gherkin pre-word : THEN

---

### Then I can see the current page url should be _{url}_

_This will compare the current URL against the URL you provided on parameter : {url}_

```gherkin
Scenario: Validate user page access
   Given that a user in on page url 'https://www.npmjs.com/'
   Then I can see the current page url should be 'https://www.npmjs.com/'
```

_The example above is validating the current URL is equal to `'https://www.npmjs.com/'`_

---

### Then I can see page element _{locator}_ is displayed

_This will assert the page element {locator} is displayed_

```gherkin
Scenario: Validate user page access
   Given that a user in on page url 'https://www.facebook.com/'
   When I click on the page element "._6ltj>a"
   Then I can see page element "#identify_email" is displayed
```

_The example above is validating field "#identify_email" is displayed_

**_Note : This time, use double-quote instead of single-quote in the locator parameter_**

---
