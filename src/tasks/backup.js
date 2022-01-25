const shell = require('shelljs');

module.exports = {
    backupTodo() {
        shell.mkdir('-p', '../data/backup');
        const command = shell.exec('mv ../data/todos.json ../data/backup/todos.json', { silent: true });
        if (!command.code) {
            console.log('Backup realizado com sucesso! To-dos zerados.');
        } else {
            console.log(command.stderr);
            console.log('Erro ao realizar backup.');
        }
    }
}