#!/usr/bin/env node

require('dotenv').config();
const { Command } = require("commander");
const request = require("./utils/requestMethods");
const render = require("./utils/renderMethods");
const chalk = require("chalk");
const { spinner } = require("./utils/spinner");

const program = new Command();
program.version("0.0.1");

program
  .command("get-persons")
  .description("Make a network request to fetch most popular persons")
  .option("-p, --popular", "Fetch the popular persons")
  .requiredOption("--page <number>", "The page of persons data results to fetch", "1")
  .action(async function handleAction(options) {

    spinner.start(`${chalk.bold(`${chalk.yellow("Fetching persons data...")}`)}`);

    const page = parseInt(options.page);
    let personsJson = {};
    let spinnerText = "";

    personsJson = await request.getPopularPersons(page);
    spinnerText = "Data loaded";

    render.renderPersons(
      personsJson.page,
      personsJson.total_pages,
      personsJson.results
    );
    spinner.succeed(spinnerText);
  });

program
  .command("get-person")
  .description("Make a network request to fetch the data of a single person")
  .action(function handleAction() {
    console.log("hello-world");
    // console.log(process.env.API_KEY);
  });

program
  .command("get-movies")
  .description("Make a network request to fetch movies")
  .action(function handleAction() {
    console.log("hello-world");
  });

program
  .command("get-movie")
  .description("Make a network request to fetch the data of a single person")
  .action(function handleAction() {
    console.log("hello-world");
  });

// error on unknown commands

program.parse(process.argv);
