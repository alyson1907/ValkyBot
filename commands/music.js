const ytdl = require('ytdl-core')

const playAudio = (message) => {
  if (message.channel.type !== 'text') return

  const voiceChannel = message.member.voice.channel

  if (!voiceChannel) {
    return message.reply('You need to be in a Voice Channel!')
  }

  voiceChannel.join().then((connection) => {
    const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' })
    const dispatcher = connection.play(stream)
    dispatcher.on('finish', () => voiceChannel.leave())
  })
}

const musicHandler = (message, command) => {
  switch (command) {
  case 'play':
    playAudio(message)
    break

  default:
    return
  }
}

module.exports = musicHandler
