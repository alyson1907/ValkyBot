const parseCommand = (message) => {
  const msgElements = message.content.substring(1).split(' ')
  const handler = msgElements.shift()
  const command = msgElements.shift()

  return {
    handler,
    command,
    args: msgElements,
  }
}

module.exports = {
  parseCommand,
}
