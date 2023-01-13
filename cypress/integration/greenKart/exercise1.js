/// <reference types="cypress"/>

describe("My First Exercise", () => {
  it("My First Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".products").as("productLocator");
    // cy.get("@productLocator")
    //   .find(".product")
    //   .eq(2)
    //   .contains("ADD TO CART")
    //   .click();

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          //cypress doesn not let you click when you use find in thesame statement so use the cy.wrap method
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
