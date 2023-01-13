describe("Child Window Test", () => {
  it("Child Window Testcase", () => {
    cy.visit(Cypress.env("baseUrl") + "/AutomationPractice/");

    // cy.window().then((win) => {
    //   cy.stub(win, "open", (url) => {
    //     win.location.href = "http://www.qaclickacademy.com/";
    //   }).as("popup");
    // });
    // cy.origin("http://www.qaclickacademy.com/", () => {
    //   cy.url().should("include", "qaclickacademy");
    // });

    // it("My First Testcase", () => {
    //   cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //   cy.get("a#opentab").then(function (el) {
    //     const url = el.prop("href");
    //     cy.visit(url);
    //   });
    // });
  });
});
