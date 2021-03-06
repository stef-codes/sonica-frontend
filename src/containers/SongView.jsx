import React from 'react'
import '../styles/SongView.styles.css'
import { connect } from 'react-redux';
import { addSong } from '../actions/song'; 
import ReactPlayer from 'react-player'

class SongView extends React.Component {
  state = {
        trackName: this.props.location.state.song.trackName,
        artistName: this.props.location.state.song.artistName,
        collectionName: this.props.location.state.song.collectionName,
        primaryGenreName: this.props.location.state.song.primaryGenreName, 
        artworkUrl100: this.props.location.state.song.artworkUrl100,
        trackViewUrl: this.props.location.state.song.trackViewUrl, 
        previewUrl: this.props.location.state.song.previewUrl,
        playing: false
  }

  handleClick = song => {
    this.props.addSong(song).then(() =>
    this.props.history.push("/songs"))
  };

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }


  render() {
     const song = this.state;
    return (
      <div className="track">
        <ReactPlayer url={song.previewUrl} controls='true'>
        </ReactPlayer>


        <img src={song.artworkUrl100} alt={song.trackName} />
          <h3>{song.trackName}</h3>
          <p>Genre: {song.primaryGenreName}</p>
          <button id={this.props.match.params.trackId} onClick={() => this.handleClick(song)}>
            Add to List
          </button>
      </div>
    );
  }
}


export default connect(null, {addSong}) (SongView)