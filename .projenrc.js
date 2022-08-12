const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  terraformProvider: "external@~> 2.1",
  cdktfVersion: "0.13.0-pre.16",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
});

project.synth();
