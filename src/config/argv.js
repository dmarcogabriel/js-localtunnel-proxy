const yargs = require('yargs')

const port = {
  alias: 'p',
  type: 'number',
  description: 'Número da porta a ser observada',
}

const subdomain = {
  alias: 's',
  type: 'string',
  description: 'Subdomínio do localtunnel para ser reutilizado. ex: https://<subdomain>.loca.lt',
}

const argv = yargs
    .options({
      port,
      subdomain,
    })
    .help()
    .argv

module.exports = argv
