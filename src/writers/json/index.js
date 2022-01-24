const fs = require("fs");

module.exports = {
    writeJson (path, data) {
        fs.writeFileSync(path, JSON.stringify(data, null, '\t'))
    }
}