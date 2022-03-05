describe("Load voting and render the expected page elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should be able to visit the page and render the nav bar", () => {
    cy.visit("http://localhost:3000/saved")
      .get(".nav-bar")
      .should("be.visible");
  });
  it("Should be able to visit the page and render the 'Back to vote' button", () => {
    cy.visit("http://localhost:3000/saved")
      .get(".back-button")
  });
  it("Should be able to visit the page and render the fetched book section", () => {
    cy.visit("http://localhost:3000/saved")
        .get(".fetched-books");
  });
  it("Should be able to delete a book cover", () => {
    cy.visit("http://localhost:3000")
    cy.wait(800)
    .get(".thumbs-up")
    .click()
    .get(".saved-button")
    .click()
    .get(".delete-button")
    .click()
  })
  it("Should be able to click the 'Back to vote' button and go to vote page", () => {
    cy.visit("http://localhost:3000/saved")
    .get(".back-button")
    .click()
    .url()
    .should("eq", "http://localhost:3000/");
  });
});