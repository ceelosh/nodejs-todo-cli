const inquirer = require("inquirer");
const { join } = require('path');
const { readJson } = require("../readers/json");
const { writeJson } = require("../writers/json");

// data file 
const dataPath = join(__dirname, '../data/todos.json');

module.exports = { 
    async add(item) {
        let answer;
    
        if(!item){
            answer = await inquirer.prompt([
                {
                    type: "input",
                    name: "item",
                    message: "O que deseja adicionar na lista de to-do ?",
                    validate: value => value ? true : 'Não é permitido um item vazio...'
                }
            ]);
        }
        
        let data = readJson(dataPath);

        data.push({
            title: item || answer.item,
            done: false
        });
    
        writeJson(dataPath, data);

        
        console.log("Adicionado com sucesso!");
    }
 }