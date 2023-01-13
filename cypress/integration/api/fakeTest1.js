describe("API Mock Test", function () {
  it("API 404 Test", function () {
    cy.visit(Cypress.env("baseUrl") + "/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        req.continue((res) => {
          expect(res.statusCode).to.equal(404);
        });
      }
    ).as("dummyUrl");
    cy.get(".btn.btn-primary").click();
    cy.wait("@dummyUrl");
  });
});
