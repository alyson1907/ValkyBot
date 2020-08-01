const { Message } = require('discord.js')

const parseCommand = (message) => {
  const msgElements = message.content.substring(1).split(' ')
  const command = msgElements.shift()

  return {
    command,
    args: msgElements,
  }
}

module.exports = {
  parseCommand,
}
