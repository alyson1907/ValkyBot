require('dotenv').config()
const Discord = require('discord.js')
const { bot: botConfig } = require('./config')
const { parseCommand } = require('./helpers')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('ValkyBot ready!')
})
bot.on('message', (message) => {
  if (message.content[0] !== botConfig.prefix) return
  const { command, args } = parseCommand(message)
})

bot.login(process.env.BOT_TOKEN)
