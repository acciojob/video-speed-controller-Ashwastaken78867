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
