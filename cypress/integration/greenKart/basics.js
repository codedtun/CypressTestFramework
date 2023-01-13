/// <reference types="cypress"/>

describe("My First Test", () => {
  it("My First Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //using jquery
    //cy.get(".product:visible").should("have.length", 4);
    //using parents to child chaining

    //using alias to reduce duplicate code
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.log("testing");
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(function () {
        cy.log("Testing");
      });
    //the cy.log(Tsting) has to be put in .then cmd else it will be printed before it gets to that line

    //iterating over an array of dom elements
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();
        if (vegText.includes("Cashews")) {
          //cypress doesn not let you click when you use find in thesame statement so use the cy.wrap method
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");

    // the below statement will not run as .text() is not a cypress command so we resolve it with a promise
    // const logo = cy.get(".greenLogo");
    //   cy.log(logo.text());
    cy.get(".greenLogo").then(function (logoelement) {
      cy.log(logoelement.text());
    });
  });
});
