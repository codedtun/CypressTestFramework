//import cypress from "cypress";
import HomePage from "../../support/pageObjects/HomePage";
import ProductsPage from "../../support/pageObjects/ProductsPage";

describe("Framework Test", () => {
  let testData;
  before(function () {
    //runs once before all test in the block
    cy.fixture("example").then(function (dataJson) {
      testData = dataJson;
      return testData;
    });
  });
  it("E2E Test", () => {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

    cy.visit(Cypress.env("baseUrl") + "/angularpractice/");

    homePage.getEditBox().type(testData.name);
    homePage.getGender().select(testData.gender);
    homePage.getTwoWayDataBinding().should("have.value", testData.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.clickRadioButton().should("be.disabled");
    homePage.clickShopButton().click();
    cy.url().should("include", "shop");
    cy.printSomething();
    //cy.pause();
    //select multiple element from an array in fixture file
    testData.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    productsPage.clickCheckOut().click();
    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each(($el, index, $list) => {
        const amount = $el.text();
        let res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });
    cy.get(".text-right  strong").then(function (element) {
      const amount = element.text();
      let res = amount.split(" ");
      let total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });
    //cy.get("h4.media-heading > a").should("have.text", "Nokia Edge");
    cy.contains("Checkout").click();
    cy.get("#country").type("india");
    //this scope is only valid for this test.
    //cypress.defineConfig("pageLoadTimeout", 8000);
    cy.get(".suggestions > ul > li > a").click();
    cy.get(".checkbox > label").click({ force: true });
    cy.contains("Purchase").click();
    cy.get(".alert").then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success! Thank you!")).to.be.true;
    });
    // cy.get(".alert").contains(
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // );
    // cy.get(".alert").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // );
  });
});

// describe("Another Framework Test", () => {
//   before(function () {
//     //runs once before all test in the block
//     cy.fixture("example").then(function (dataJson) {
//       this.dataJson = dataJson;
//     });
//   });
//   it("My First Testcase", () => {
//     cy.visit("https://rahulshettyacademy.com/angularpractice/");

//     cy.get(".ng-invalid.ng-pristine.ng-untouched  input[name='name']").type(
//       this.dataJson.name
//     );
//     cy.get("select").select(this.dataJson.gender);
//   });
// });
