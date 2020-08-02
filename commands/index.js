const musicHandler = require('./music')
const { commandList, bot } = require('../config')

const getHandlerName = (commandName) => {
  /* eslint-disable-next-line no-unused-vars */
  const handler = Object.entries(commandList).find(([_, commands]) => commands.includes(commandName))
  return handler && handler[0]
}

const commandsHandler = (message, command) => {
  const handler = getHandlerName(command.name)

  switch (handler) {
  case 'music':
    musicHandler(message, command)
    break

  default:
    message.reply(`Please provide a valid command. Type ${bot.prefix}help to see the command list`)
  }
}

module.exports = commandsHandler
