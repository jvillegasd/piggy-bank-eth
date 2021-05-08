const PiggyBank = artifacts.require("PiggyBank")

module.exports = (deployer) => {
  deployer.deploy(PiggyBank)
}