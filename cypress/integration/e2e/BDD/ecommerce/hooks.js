let testData;
beforeEach(function () {
  //runs once before all test in the block
  cy.fixture("example").then(function (dataJson) {
    testData = dataJson;
    return testData;
  });
});
