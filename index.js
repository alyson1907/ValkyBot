require('dotenv').config()
const Discord = require('discord.js')
const { bot: botConfig } = require('./config')
const { parseCommand } = require('./helpers')
const commandsHandler = require('./commands')
const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('ValkyBot ready!')
})

bot.on('message', (message) => {
  if (message.content[0] !== botConfig.prefix) return
  const command = parseCommand(message)
  commandsHandler(message, command)
})

bot.login(process.env.BOT_TOKEN)
