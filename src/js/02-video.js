import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

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
  const currentTimeJSON = JSON.stringify(currentTime);
  throttle(localStorage.setItem('CurrentTime', currentTimeJSON), 1000);
  if (currentTimeJSON) {
    currentTime.duration = data.duration;
    currentTime.percent = data.percent;
    currentTime.seconds = data.seconds;
  }
  console.log(currentTimeJSON);
});
