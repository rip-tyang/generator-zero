const path = require('path');
const yeoman = require('yeoman-generator');
const askName = require('inquirer-npm-name');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

class GeneratorZero extends yeoman.Base {
  initializing() {
    this.props = {};
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the super-duper ${chalk.red('generator-zero')} generator!`
    ));
    return askName({
      name: 'name',
      message: 'Your project name',
      default: 'project-zero',
    }, this).then((props) => {
      this.props.name = props.name;
    });
  }

  default() {
    if (path.basename(this.destinationPath()) !== this.props.name) {
      this.log(
        `Your project must be inside a folder named ${this.props.name} \n` +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.name);
      this.destinationRoot(this.destinationPath(this.props.name));
    }
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath()
    );
  }

  install() {
    this.installDependencies({ bower: false });
  }
}

module.exports = GeneratorZero;
