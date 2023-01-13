const neatCSV = require("neat-csv");
let productName;
describe("JWT Test", function () {
  let testData;
  before(function () {
    //runs once before all test in the block
    cy.fixture("example").then(function (dataJson) {
      testData = dataJson;
      return testData;
    });
  });
  // it("JWT Session Token Test", function () {
  //   cy.LoginViaAPI().then(function () {
  //     cy.visit(Cypress.env("baseUrl") + "/client/", {
  //       onBeforeLoad: function (window) {
  //         window.localStorage.setItem("token", Cypress.env("token"));
  //       },
  //     });
  //   });
  // });

  it("JWT Login Manual Test", function async() {
    cy.visit(Cypress.env("baseUrl") + "/client/");
    cy.get("input#userEmail").type(testData.email);
    cy.get("input#userPassword").type(testData.password);
    cy.get("input#login").click();
    cy.get("[class='left mt-1'] p").should("have.text", "Automation Practice");
    cy.get(".card-body b")
      .eq(1)
      .then(function (element) {
        productName = element.text();
      });
    cy.get(".card-body button:last-of-type").eq(1).click();
    cy.get("[routerlink*='cart']").click();
    cy.contains("Checkout").click();
    cy.get("[placeholder*='Country']").type("ind");
    cy.get(".ta-results button").each(($e1, index, $list) => {
      if ($e1.text() === " India") {
        cy.wrap($e1).click();
      }
    });
    cy.get(".action__submit").click();
    cy.wait(2000);
    cy.get(".order-summary button").click();

    cy.readFile(
      Cypress.config("fileServerFolder") +
        "/cypress/downloads/order-invoice_cypress_test.csv"
    ).then(async (text) => {
      const csv = await neatCSV(text);
      cy.log(csv);
      //when there is space in property name use square brackets
      //csv[0].Product Name
      const actualProductCSV = csv[0]["Product Name"];
      expect(productName).to.equal(actualProductCSV);
    });
    //async function works with await
    //cy.readFile("C:/Users/User/CypressTutorial2022/cypress/downloads/order-invoice_tunde_olomu.csv")
    //neatCSV converts csv files to json file
  });
});
