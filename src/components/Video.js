import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render () {
    
    const {videoId} = this.props;
    
    const opts = {
      height: '548',
      width: '996',
      playerVars: { // https://developers.google.com/youtube/player_parameters
      }
    };

    return (
      <div className="video">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady} 
            containerClassName="video__wrapper"
            className="video__iframe"
          />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Video;