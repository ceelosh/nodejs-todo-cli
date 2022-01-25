#!/usr/bin/env node

const program = require("commander");
const version = require("../package.json").version;

// commands
const { add } =  require("./commands/add");
const { list } =  require("./commands/list");
const { done } = require("./commands/done");
const { undone } = require("./commands/undone");


// get version from package
program.version(version);

program
  .command("add [todo]")
  .description("Adiciona um item na lista de to-do.")
  .action(async (todo) => await add(todo));

program
	.command("list")
	.description("Lista todos os items na lista de to-do.")
	.action(() => list());

program
  .command("done [id]")
  .description("Marca um item como finalizado.")
  .action(async (itemId) => await done(itemId));

program
  .command("undone [id]")
  .description("Marca um item como não-finalizado")
  .action(async (itemId) => await undone(itemId));

program.parse(process.argv);