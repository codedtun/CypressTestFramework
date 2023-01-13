// ***********************************************

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("printSomething", (productName) => {
  cy.log("I should be displayed");
});

Cypress.Commands.add("LoginViaAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/client/", {
    userEmail: "tunde_olomu@programmer.com",
    userPassword: "Password1",
  }).then(function (response) {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token);
  });
});

Cypress.Commands.add("LoginAPI", () => {
  cy.request("POST", "https://rahulshettyacademy.com/client/", {
    userEmail: "tunde_olomu@programmer.com",
    userPassword: "Password1",
  }).then(function (response) {
    expect(response.status).to.eq(200);
    Cypress.env("token", response.body.token);
  });
});

// This commands gets an item from a shopping list --
Cypress.Commands.add("selectProduct", (productName) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    const device = $el.text();
    if (device.includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("selProd", (prodName) => {
  cy.get("h4.card-title").each(($el, index, $list) => {
    const device = $el.text();
    if (device.includes(prodName)) {
      cy.wait(1500);
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
