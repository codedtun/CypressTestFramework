//import cypress from "cypress";
import HomePage from "../../../../support/pageObjects/HomePage";
import ProductsPage from "../../../../support/pageObjects/ProductsPage";
import {
  Given,
  When,
  And,
  But,
  Then,
} from "cypress-cucumber-preprocessor/steps";
let testData;
let name;
let gender;
beforeEach(function () {
  //runs once before all test in the block
  cy.fixture("example").then(function (dataJson) {
    testData = dataJson;
    return testData;
  });
});
const homePage = new HomePage();
const productsPage = new ProductsPage();

Given("I navigate to E-Commerce page", () => {
  cy.visit(Cypress.env("baseUrl") + "/angularpractice/");
});

When("I add items to the cart", function () {
  homePage.clickShopButton().click();
  cy.url().should("include", "shop");
  cy.printSomething();
  //cy.pause();
  //select multiple element from an array in fixture file
  testData.productName.forEach(function (element) {
    cy.selectProduct(element);
  });
  productsPage.clickCheckOut().click();
});

And("Validate the total items and prices", () => {
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
});

Then("Select the country, submit and verify", () => {
  cy.contains("Checkout").click();
  cy.get("#country").type("india");
  cy.get(".suggestions > ul > li > a").click();
  cy.get(".checkbox > label").click({ force: true });
  cy.contains("Purchase").click();
  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success! Thank you!")).to.be.true;
  });
});

When("I fill the form details", function (dataTable) {
  name = dataTable.rawTable[1][0];
  gender = dataTable.rawTable[1][1];
  homePage.getEditBox().type(name);
  homePage.getGender().select(gender);
});

Then("Validate the details entered", function (dataTable) {
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getEditBox().should("have.attr", "minlength", "2");
  homePage.clickRadioButton().should("be.disabled");
});

And("Select the shop page", () => {
  homePage.clickShopButton().click();
  cy.url().should("include", "shop");
});
