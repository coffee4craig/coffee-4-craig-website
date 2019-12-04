import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render () {
    const opts = {
      height: '548',
      width: '996',
      playerVars: { // https://developers.google.com/youtube/player_parameters
      }
    };

    return (
      <div className="video">
        <div class="video__wrapper">
          <YouTube
            videoId="8rn5Yef9OGw"
            opts={opts}
            onReady={this._onReady} 
          />
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video;