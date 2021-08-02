const chalk = require("chalk");

const log = console.log;

function renderPersons(page, allPages, persons) {
  if (allPages > page) {
    log(chalk.white("\n\n--------------------------------"));
    log(`Page: ${chalk.bold(page)} of: ${chalk.white(allPages)}`);
    persons.forEach((person) => {
      log(chalk.white("--------------------------------"));
      log("\n");
      log(chalk.bold(`${chalk.white(`Person`)}`));
      log(chalk.white(`ID:${person.id}`));
      log(chalk.white(`Name: ${chalk.bold(chalk.blue(`${person.name}`))}`));
      if(person.known_for_department == "Acting"){
        log(chalk.white(`Department: ${chalk.magenta(`${person.known_for_department}`)}`));
      }
      if(person.known_for != null){
        person.known_for.forEach((movie)=>{
          log(chalk.white("--------------------------------"));
          log(chalk.bold(`${chalk.white(`Movie`)}`));
          log(`ID: ${chalk.white(`${movie.id}`)}`);
          log(`Release date: ${chalk.white(`${movie.first_air_date || movie.release_date}`)}`);
          log(`Title: ${chalk.white(`${movie.name || movie.title}`)}`);
          log(chalk.white(""));
        })
      } else {
        log(`\t ${chalk.white(`${movie.name}`)} doesn't appear in any movie\n`);
      }
    });
  }
}

module.exports = {
  renderPersons: renderPersons,
};