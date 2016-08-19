const path = require('path');
// const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-zero:app', () => {
  before(() => {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ name: true })
      .toPromise();
  });
});
