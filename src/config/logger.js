const {bgBlue, bgRed, black} = require('chalk')
const fs = require('fs-extra')
const path = require('path')

const {info, error} = console

console.info = data => {
  info(bgBlue(black(' INFO ')), data)
}

console.error = err => {
  fs.writeFileSync(
      path.join(__dirname, '../logs/error.log'),
      JSON.stringify(err),
  )
  error(bgRed(black(' ERROR ')), err)
}

console.space = () => info()
