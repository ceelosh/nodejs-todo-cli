const Table = require('cli-table');

const { readJson } = require("../readers/json");
const { dataPath } = require("../data");

module.exports = { 
    list() {
        const data = readJson(dataPath);
        const table = new Table({
            head: ['id', 'item', 'status'],
            colWidths: [30, 50, 10]
        });

        data.map((todo, index) =>
            table.push(
                [index, todo.title, todo.done ? 'finalizado' : 'pendente']
            )
        );
        console.log(table.toString());
    }
}