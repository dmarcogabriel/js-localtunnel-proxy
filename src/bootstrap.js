const lt = require('localtunnel')
const {blueBright, bgBlue, black} = require('chalk')
const {argv} = require('./config')
const _ = require('lodash')

const {PORT, SUBDOMAIN} = process.env

module.exports = async () => {
  try {
    const port = argv.p || argv.port || PORT
    const subdomain = argv.s || argv.subdomain || SUBDOMAIN

    if (_.isNil(subdomain) || _.isNil(port)) {
      const message =
        'SUBDOMAIN or PORT cannot be null. Please check README file'
      throw new Error(message)
    }

    const tunnel = await lt({port, subdomain})

    console.clear()
    console.log(`Your URL is: ${blueBright(tunnel.url)}`)
    console.log(`Listenning to port: ${bgBlue(` ${black(port)} `)}`)

    tunnel.on('request', info => {
      console.space()
      console.info(info)
    })
  } catch (error) {
    console.error(error.message)
  }
}
