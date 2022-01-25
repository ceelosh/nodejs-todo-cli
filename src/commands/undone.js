const inquirer = require("inquirer");
const { readJson } = require("../readers/json");
const { writeJson } = require("../writers/json");
const { jsonUrl } = require("../data");


module.exports = { 
    async undone(todo) {
        let answers;
        if (!todo) {
            answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'todo',
                    message: 'Qual o id do item?',
                    validate: value => value !== undefined ? true : 'Defina um id de item para ser atualizado!'
                }
            ]);
        }

        let data = readJson(jsonUrl);
        let index = data.findIndex((item) => item.id == todo);
        data[index].done = false
        writeJson(jsonUrl, data);

        console.log("Tarefa concluida com sucesso!");
    }
}