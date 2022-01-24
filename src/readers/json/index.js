const fs = require("fs");

module.exports = {
    readJson (path) {
        const data = fs.existsSync(path) ? fs.readFileSync(path) : [];
        
        try{
            return JSON.parse(data);
        }catch(e){
            console.error(e);
            return [];
        }
    }
}