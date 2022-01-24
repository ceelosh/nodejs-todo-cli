const Table = require('cli-table');

const { readJson } = require("../readers/json");
const { jsonUrl } = require("../data");

module.exports = { 
    list() {
        const data = readJson(jsonUrl);
        const table = new Table({
            head: ['id', 'item', 'criado em' ,'status'],
            colWidths: [40, 50, 28, 10]
        });

        data.map((todo, _) =>
            table.push(
                [todo.id, todo.title, todo.createdAt, todo.done ? 'finalizado' : 'pendente']
            )
        );
        console.log(table.toString());
    }
}