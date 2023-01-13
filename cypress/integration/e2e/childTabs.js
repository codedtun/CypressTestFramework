describe("Child Tab Test", () => {
  it("Child Tab Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");

    //open a link on the same window
    //invoke(removeAttr) removes the target attribute which enables a page to open in a new window
    cy.get("a#opentab").invoke("removeAttr", "target").click();

    //assert that you navigated to the right page
    cy.url().should("include", "https://www.rahulshettyacademy.com/");

    cy.go("back");

    cy.url().should(
      "include",
      "https://rahulshettyacademy.com/AutomationPractice/"
    );
  });
});
