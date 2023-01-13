/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import "cypress-iframe";

describe("IFrame Test", () => {
  it("IFrame Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");

    //npm install -D cypress-iframe
    cy.frameLoaded("iframe#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 0);
  });
});
