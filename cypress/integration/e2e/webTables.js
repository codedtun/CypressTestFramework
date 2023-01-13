/// <reference types="cypress"/>

describe("Web Table Test", () => {
  it("Web Table Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            cy.log(priceText);
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
