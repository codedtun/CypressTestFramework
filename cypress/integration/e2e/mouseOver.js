/// <reference types="cypress"/>

describe("Mouse Over Test", () => {
  it("Mouse Over Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");

    // cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
