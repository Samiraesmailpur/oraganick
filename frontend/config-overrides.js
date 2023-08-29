const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@styles": "src/styles",
    "@pages": "src/pages",
    "@redux": "src/redux",
    "@helpers": "src/helpers",
  })(config);

  return config;
};
