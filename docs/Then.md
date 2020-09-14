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
