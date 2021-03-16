// SPDX-License-Identifier: MIT
const ERC721PresetMinterPauserAutoId = artifacts.require(
  "ERC721PresetMinterPauserAutoId"
);

module.exports = function (deployer) {
  deployer.deploy(
    ERC721PresetMinterPauserAutoId,
    "Kev NFT",
    "KNFT",
    "http://my-json-server.typicode.com/wwwfreedom/json/db"
  );
};
