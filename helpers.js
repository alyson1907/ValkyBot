const parseCommand = (message) => {
  const msgElements = message.content.substring(1).split(' ')
  const commandName = msgElements.shift()

  return {
    name: commandName,
    args: msgElements,
  }
}

module.exports = {
  parseCommand,
}
