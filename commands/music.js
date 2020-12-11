const ytdl = require('ytdl-core')

const state = {
  queue: [],
}

const playAudio = async (message, commandArgs) => {
  if (message.channel.type !== 'text') return

  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) return message.reply('You need to be in a Voice Channel!')

  const videoURL = 'https://www.youtube.com/watch?v=tPEE9ZwTmy0' // command.args.shift()
  if (!ytdl.validateURL(videoURL)) return message.reply('The received URL is invalid. Pleade provide a valid Youtube URL')
  // state.queue.push(videoURL)
  
  const stream = ytdl(videoURL, { filter: 'audioonly', volume: 0.02, quality: 'highest' })
  const connection = await voiceChannel.join()
  const dispatcher = connection.play(stream)

  dispatcher.on('finish', () => {
    voiceChannel.leave()
  })
}

const leaveVoiceChannel = (message) => {
  message.member.voice.channel.leave()
}

const musicHandler = (message, command) => {
  const commandName = command.command
  const commandArgs = command.args

  switch (commandName) {
  case 'play':
    return playAudio(message, commandArgs)

  case 'leave':
    return leaveVoiceChannel(message)

  default:
    return
  }
}

module.exports = musicHandler
