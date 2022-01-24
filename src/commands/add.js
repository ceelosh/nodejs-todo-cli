const inquirer = require("inquirer");
const { readJson } = require("../readers/json");
const { writeJson } = require("../writers/json");
const { v4: uuidv4 } = require('uuid'); 
const { jsonUrl } = require("../data");
const dayjs = require('dayjs')

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
        
        let data = readJson(jsonUrl);

        data.push({
            id: uuidv4(),
            title: item || answer.item,
            createdAt: dayjs().format(),
            done: false
        });
    
        writeJson(jsonUrl, data);

        
        console.log("Adicionado com sucesso!");
    }
 }