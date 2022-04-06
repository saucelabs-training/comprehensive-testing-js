# API testing

## 🧠You will learn

✅

[SUT](https://jsonplaceholder.cypress.io/)

[Docs](https://jsonplaceholder.typicode.com/)

## What is API Testing?

<img src="https://tse1.mm.bing.net/th?id=OIP.ASpOoqkLWHODifb7T4f2twHaD4&pid=Api" alt="api-testing" width="500"/>

<img src="https://ryancraven.tech/wp-content/uploads/2020/05/commonAPIs-1.png" alt="common-requests" width="500"/>

### Advantages of API tests

✅ Fast

✅ Reliable

✅ Check business logic of app

### 👀 Quick software under test overview

[SUT](https://jsonplaceholder.typicode.com/)

### 🏋️‍♀️ Let's try a `GET`

1. Open your browser
2. Open your Network tab of dev tools
3. Go to `https://jsonplaceholder.typicode.com/comments` in browser

### 🏋️‍♀️ Let's automate a `GET`

* Go to `cypress/integration/network/exercise.spec.js`
* Add the following code inside of `context(){}`

```js
  it("/comments returns 200 and 500 body length", () => {
    // https://on.cypress.io/request
    cy.request(`${baseUrl}/comments`).should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property("length").and.be.oneOf([500,501]);
    });
  });
```

Run the tests w/ `npx cypress run`


## Our tools

### [WebdriverIO](https://webdriver.io/)

Next-gen browser and mobile automation test framework for Node.js

### [Screener](https://screener.io/)

Automatically detect visual regressions across your UI

## 📝Summary

✅Visual e2e testing is a simple and efficient way to ensure visual consistency cross-platform and cross-OS

✅We used WebdriverIO + Screener.io to write our visual e2e tests

## ⏭️[Let's make our testing more efficient with component tests](./COMPONENT-TESTS.md)
