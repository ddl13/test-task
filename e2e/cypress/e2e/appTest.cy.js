describe("App E2E test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("add note", () => {
    cy.contains("CRUD APP").should("be.visible");

    // add new note
    cy.get("#addNote").click();
    cy.get('input[type="date"]#time').type("2023-06-10");
    cy.get("input[type='text']#note").type("Meet with friends");
    cy.get("[type='submit']").click();

    // check viewPage
    cy.contains("Meet with friends").should("be.visible");
    cy.get(".btn-view").click();
    cy.get(".card__header").should("be.visible");
    cy.get(".goBackBtn").click();

    // edit note
    cy.contains("Meet with friends").should("be.visible");
    cy.get(".btn-edit").click();
    cy.get('input[type="date"]#time').type("2023-06-11");
    cy.get("input[type='text']#note").clear();
    cy.get("input[type='text']#note").type("Visit parents");
    cy.get("[type='submit']").click();

    // delete note
    cy.contains("Visit parents").should("be.visible");

    cy.get(".btn-delete").click();
    cy.on("window:confirm", () => true);

    cy.contains("CRUD APP").should("be.visible");
  });
});
