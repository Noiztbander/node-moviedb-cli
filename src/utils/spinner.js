const ora = require("ora");

const spinner = ora({
  spinner: "unicorns",
});

module.exports = {
  spinner: spinner,
};