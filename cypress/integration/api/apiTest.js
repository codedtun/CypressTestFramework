describe("API Mock Test", function () {
  it("API Test", function () {
    cy.request("POST", "http://216.10.245.166", {
      name: "Learn Appium Automation with Java",
      isbn: "bcd324",
      aisle: "290",
      author: "John foe",
    }).then(function (response) {
      //expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});
