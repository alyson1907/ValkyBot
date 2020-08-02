const ytdl = require('ytdl-core')

const playAudio = (message, command) => {
  if (message.channel.type !== 'text') return

  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) {
    return message.reply('You need to be in a Voice Channel!')
  }

  voiceChannel.join().then((connection) => {
    const stream = ytdl('https://www.youtube.com/watch?v=VWaQcKiAj_Q', { filter: 'audioonly' })
    const dispatcher = connection.play(stream)
    dispatcher.on('finish', () => voiceChannel.leave())
  })
}

const musicHandler = (message, command) => {
  switch (command.name) {
  case 'play':
    playAudio(message, command)
    break

  default:
    return
  }
}

module.exports = musicHandler
