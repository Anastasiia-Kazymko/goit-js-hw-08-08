import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = {
  duration: null,
  percent: null,
  seconds: null,
};

player.on('timeupdate', function (data) {
  currentTime.duration = data.duration;
  currentTime.percent = data.percent;
  currentTime.seconds = data.seconds;
});
