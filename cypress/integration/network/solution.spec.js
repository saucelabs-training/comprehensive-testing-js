/// <reference types="cypress" />

context("Network Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("comments returns 200 and 500 body length", () => {
    // https://on.cypress.io/request
    cy.request(`${baseUrl}/comments`).should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property("length").and.be.oneOf([500, 501]);
    });
  });

  it("Can create new user on /posts", () => {
    // first, let's find out the userId of the first user we have
    cy.request("POST", `${baseUrl}/posts`, {
      userId: 11,
      title: "Cypress Test Runner",
      body: "new body",
    })
      // note that the value here is the returned value of the 2nd request
      // which is the new post object
      .then((response) => {
        console.log(response);
        expect(response).property("status").to.equal(201); // new entity created
        expect(response).property("body").to.contain({
          title: "Cypress Test Runner",
        });
      });
  });

  it("Can update posts", () => {
    // a PUT is used to update an existing entity
    cy.request("PUT", `${baseUrl}/posts/1`, {
      id: 1,
      userId: 11,
      title: "foo",
      body: "bar",
    }).then((response) => {
      console.log(response);
      expect(response).property("status").to.equal(200);
      // same as expect(response).property("statusText")
      expect(response.statusText).to.equal("OK");
      expect(response.body).to.contain({
        title: "foo",
      });
    });
  });
});
