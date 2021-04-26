require('dotenv').config()
const lt = require('localtunnel')
const {blue, green} = require('chalk')

module.exports = async (port, subdomain) => {
  const tunnel = await lt({
    port,
    subdomain,
  })
  console.log(`Your URL is: ${blue(tunnel.url)}`)
  console.log(`Listenning to port: ${blue(port)}`)

  tunnel.on('request', info => {
    console.log(green('INFO'), info)
  })

  tunnel.on('close', () => {
    console.log(green('Thanks for using.'))
    console.log(green(':)'))
    tunnel.close()
  })
}

