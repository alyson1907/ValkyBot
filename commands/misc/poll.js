const { Command } = require('discord.js-commando')

class Poll extends Command {
  constructor (bot) {
    const commandOptions = {
      name: 'poll',
      aliases: ['poll', 'create-poll'],
      group: 'misc',
      memberName: 'poll',
      description: 'Creates a voting poll',
    }

    super(bot, commandOptions)
  }

  // Message received when command is run. Instance of `CommandoMessage`
  run (message) {
    console.log(message)
    return message.say('Poll called')
  }
    
}

module.exports = Poll
