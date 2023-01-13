describe("API Mock Test", function () {
  it("Fake API Test", function () {
    cy.visit(Cypress.env("baseUrl") + "/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          { book_name: "RestAssured with Java", isbn: "RSU", aisle: "2301" },
        ],
      }
    ).as("bookretrievals");
    cy.get(".btn.btn-primary").click();
    cy.wait("@bookretrievals").should(({ request, response }) => {
      cy.get("tr").should("have.length", response.body.length + 1);
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
