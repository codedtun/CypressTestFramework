class HomePage {
  getEditBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }

  getTwoWayDataBinding() {
    return cy.get("h4 > input[name='name']");
  }

  getGender() {
    return cy.get("select");
  }

  clickRadioButton() {
    return cy.get("#inlineRadio3");
  }

  clickShopButton() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
