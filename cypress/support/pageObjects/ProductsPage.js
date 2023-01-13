class ProductsPage {
  getItemsName() {
    return cy.get("h4.card-title");
  }

  clickCheckOut() {
    return cy.get("a.nav-link.btn.btn-primary");
  }

  clickAddButton() {
    return cy.get("button.btn.btn-info");
  }
}

export default ProductsPage;
