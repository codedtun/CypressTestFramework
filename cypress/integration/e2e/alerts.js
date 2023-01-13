/// <reference types="cypress"/>

describe("Alerts Examples", () => {
  it("Alerts Test", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");

    cy.get("input#alertbtn").click();
    cy.get("input#confirmbtn").click();

    //window alert. the cy.on command triggers a window alert event
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
