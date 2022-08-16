/* eslint-disable */

// Fund 20 UMA to test account before running other tests.
describe("Deposit", () => {
  it("Seeds tokens to accounts", () => {
    cy.exec(
      "HARDHAT_NETWORK=localhost node ./hardhat-scripts/seedUmaToAccounts.js"
    ).then((res) => {
      // Should be no error.
      expect(res.stderr).to.eq("");
    });
  });

  it("Connect Wallet", () => {
    cy.visit("/", { jsonRpcUrl: "http://127.0.0.1:8545" });
    cy.connectInjectedWallet("connect-wallet");

    cy.dataCy("acx-balance").should("be.visible");

    console.log(
      cy.window().then((win) => {
        console.log("win.eth", win.ethereum);
      })
    );
  });
});
