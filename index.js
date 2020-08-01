require('dotenv').config()
const path = require('path')
const { bot: botConfig } = require('./config')
const { CommandoClient } = require('discord.js-commando')
const bot = new CommandoClient(botConfig)

bot.registry
  .registerDefaultTypes()
  .registerDefaultGroups()
  .registerGroups([['misc', 'Miscellaneous  Group']]) // folders under `commands/` directory
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))

bot.once('ready', () => {
  console.log(`Logged in as ${bot.user.tag}! user_id: ${bot.user.id}`)
  bot.user.setActivity('UwU')
})
bot.on('error', console.error)

bot.login(process.env.BOT_TOKEN)
