body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
  color: white;
  margin: 0;
}

.player {
  max-width: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.viewer {
  width: 100%;
  max-height: 400px;
  border: 2px solid white;
  display: block;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
}

.player__button,
.skip {
  background: none;
  border: 1px solid white;
  padding: 5px 10px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

input[type="range"] {
  cursor: pointer;
  margin: 0 10px;
}

.progress {
  flex: 1;
  display: flex;
  background: grey;
  height: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.progress__filled {
  background: red;
  flex: 0;
  height: 100%;
}



const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggleButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggleButton);
video.addEventListener('pause', updateToggleButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

volume.addEventListener('input', handleRangeUpdate);
playbackSpeed.addEventListener('input', handleRangeUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

