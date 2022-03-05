describe("Load voting and render the expected page elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the header", () => {
    cy.visit("http://localhost:3000")
      .get("div.header")
      .should("be.visible");
  });
  it("Should be able to visit the page and render the 'See Saved' button", () => {
    cy.visit("http://localhost:3000")
      .get(".saved-button")
  });
  it("Should be able to visit the page and render the book cover container", () => {
    cy.visit("http://localhost:3000")
        .get(".cover-img");
  });
  it("Should be able to save a book cover", () => {
    cy.visit("http://localhost:3000")
    .get(".thumbs-up")
    .click()
  })
  it("Should be able to next a book cover", () => {
    cy.visit("http://localhost:3000")
    .get(".thumbs-down")
    .click()
  })
  it("Should be able to click the 'See Saved' button and go to saved page", () => {
    cy.get(".saved-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/saved");
  });
});