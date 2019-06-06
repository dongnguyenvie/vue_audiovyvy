const fs = require('fs')

const variable = {
  ...process.env
}

fs.writeFileSync('server.json', JSON.stringify(variable))
