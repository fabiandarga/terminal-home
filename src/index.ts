const radioUrl = 'http://stream.jam.fm/jamfm-bl/mp3-192/';

import Player from 'play-sound';

const radioPlayer = Player({
  player: 'mplayer',
});

// $ mplayer foo.mp3
const audio = radioPlayer.play(radioUrl, function (err) {
  if (err) throw err;
});

setTimeout(() => {
  console.log('killing audio');
  audio.kill();
}, 3000);
