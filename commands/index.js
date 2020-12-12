const musicHandler = require('./music')
const { bot } = require('../config')

const commandsHandler = (message, command) => {
  const { handler } = command

  switch (handler) {
  case 'm':
  case 'music':
    musicHandler(message, command)
    break

  default:
    message.reply(`Please provide a valid command. Type ${bot.prefix}help to see the command list`)
  }
}

module.exports = commandsHandler
