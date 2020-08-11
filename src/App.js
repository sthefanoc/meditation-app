import React, { Component } from 'react';

import './App.css';

import videoRain from './assets/video/rain.mp4';
import videoBeach from './assets/video/beach.mp4';

import audioRain from './assets/sounds/rain.mp3';
import audioBeach from './assets/sounds/beach.mp3';

import imgBeach from './assets/svg/beach.svg';
import imgMovingOutline from './assets/svg/moving-outline.svg';
import imgPause from './assets/svg/pause.svg';
import imgPlay from './assets/svg/play.svg';
import imgRain from './assets/svg/rain.svg';
import imgReplay from './assets/svg/replay.svg';
import imgTrackOutline from './assets/svg/track-outline.svg';

export default class App extends Component {
  componentDidMount(){
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const pause = document.querySelector(".pause");
    const replay = document.querySelector(".replay");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");
    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    const outlineLength = outline.getTotalLength();
    //Duration
    const timeSelect = document.querySelectorAll(".time-select button");
    let fakeDuration = 600;

    outline.style.strokeDashoffset = outlineLength;
    outline.style.strokeDasharray = outlineLength;
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${Math.floor(
      fakeDuration % 60
    ).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;

    sounds.forEach(sound => {
      sound.addEventListener("click", function() {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
      });
    });

    play.addEventListener("click", function() {
      checkPlaying(song);
    });

    pause.addEventListener("click", function() {
      checkPlaying(song);
    });

    replay.addEventListener("click", function() {
        restartSong(song);
        
      });


    const restartSong = song =>{
        let currentTime = song.currentTime;
        song.currentTime = 0;
    }

    timeSelect.forEach(option => {
      option.addEventListener("click", function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${Math.floor(
          fakeDuration % 60
        ).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`;
      });
    });

    const checkPlaying = song => {
      if (song.paused) {
        song.play();
        video.play();
        // play.src = {imgPlay};
        play.classList.add('hidden');
        pause.classList.remove('hidden');
      } else {
        song.pause();
        video.pause();
        // play.src = {imgPause};
        pause.classList.add('hidden');
        play.classList.remove('hidden');
      }
    };

    song.ontimeupdate = function() {
      let currentTime = song.currentTime;
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      let minutes = Math.floor(elapsed / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
      timeDisplay.textContent = `${minutes}:${seconds}`;
      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;

      if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        // play.src = {imgPlay};
        pause.classList.add('hidden');
        play.classList.remove('hidden');
        video.pause();
      }
    };
  }
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">Meditation App</h1>
        <div className="app">
          <div className="vid-container">
            <video loop >
              <source src={videoRain}  type="video/mp4" />
            </video>
          </div>
          <div className="time-select">
            <button data-time="120">2 Minutes</button>
            <button data-time="300" className="medium-mins">5 Minutes</button>
            <button data-time="600" className="long-mins">10 Minutes</button>
          </div>
          <div className="player-container">
            <audio className="song">
              <source src={audioRain} />
            </audio>
            <img src={imgPlay} className="play"></img>
            <img src={imgPause} className="pause hidden"></img>
            <svg className="track-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20"/>
              </svg>
            <svg className="moving-outline" width="453" height="453" viewBox="0 0 453 453" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20"/>
              </svg>
            <img src={imgReplay} className="replay"></img>
          
              <h3 className="time-display">0:00</h3>      
          </div>
          <div className="sound-picker">
            <button data-sound={audioRain} data-video={videoRain} ><img src={imgRain} alt="" /></button>
            <button data-sound={audioBeach} data-video={videoBeach}><img src={imgBeach} alt="" /></button>
          </div>
        </div>
      </div>
    );
  }
}
