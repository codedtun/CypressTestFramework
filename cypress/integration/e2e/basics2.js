/// <reference types="cypress"/>

describe("My Second Test", () => {
  it("My Second Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");
    //the .check command

    //check box
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]);

    //static dropdown menu
    cy.get("select").select("option2").should("have.value", "option2");

    //dynamic dropdown menu/Autocomplete
    cy.get("input#autocomplete").type("Unit");
    cy.get(".ui-menu-item").each(($el, index, $list) => {
      if ($el.text() === "United Kingdom (UK)") {
        $el.click();
      }
    });
    cy.get("input#autocomplete").should("have.value", "United Kingdom (UK)");

    //hidden text
    cy.get("input#displayed-text").as("displayedLocator");
    cy.get("@displayedLocator").should("be.visible");
    cy.get("input#hide-textbox").click();
    cy.get("@displayedLocator").should("not.be.visible");
    cy.get("input#show-textbox").click();
    cy.get("@displayedLocator").should("be.visible");

    //radio buttons
    cy.get("[value='radio1']").check().should("be.checked");
  });
});
