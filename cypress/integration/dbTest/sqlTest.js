context("window", function () {
  let data;
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/waiting");

    cy.sqlServer("select * from Persons").then(function (result) {
      data = result;
      console.log(result[0][1]);
    });
  });

  it("cy.wait() - waits for a specific amount of this.timeout", () => {
    cy.get(".wait-input1").type(data[0][2]);
    cy.wait(1200);
    cy.get(".wait-input2").type(data[1][2]);
    cy.wait(1200);
    cy.get(".wait-input3").type("wait after typing");
    cy.wait(1200);
  });
});
