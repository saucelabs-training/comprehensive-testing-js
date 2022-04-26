/// <reference types="cypress" />

context("Network Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it("Can create new user on /posts", () => {
    // resource will not be really updated on the server but it will be faked as if
    // TODO supply the body of the request
    cy.request("POST", `${baseUrl}/posts`, {
      // TODO add json body here
    })
      // note that the value here is the returned value of the 2nd request
      // which is the new post object
      .then((response) => {
        console.log(response);
        // TODO expect the response status to be 201
        // TODO expect the response body to contain the title = "Cypress Test"
      });
  });
});
