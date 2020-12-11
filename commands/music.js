const ytdl = require('ytdl-core')

const state = {
  queue: [],
}

const playAudio = async (message, commandArgs) => {
  if (message.channel.type !== 'text') return

  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) return message.reply('You need to be in a Voice Channel!')

  const videoURL = 'https://www.youtube.com/watch?v=tPEE9ZwTmy0' // command.args.shift()
  state.queue.push(videoURL)

  const stream = ytdl(videoURL, { filter: 'audioonly', volume: 0.02, bitrate: 128 })

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
