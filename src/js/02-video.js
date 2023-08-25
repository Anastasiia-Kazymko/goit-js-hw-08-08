import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'currentTime';

player.on('timeupdate', throttle(onPlay, 1000));
player.on('loaded', pageUpdate);

function onPlay(data) {
  localStorage.setItem('LOCALSTORAGE_KEY', data.seconds);
}

function pageUpdate() {
  let currentTime = localStorage.getItem('LOCALSTORAGE_KEY');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
