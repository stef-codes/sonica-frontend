import React from 'react'
import { connect } from 'react-redux';
import { addSong } from '../actions/song'; 

class SongView extends React.Component {
  state = {
        trackName: this.props.location.state.song.trackName,
        artistName: this.props.location.state.song.artistName,
        collectionName: this.props.location.state.song.collectionName,
        primaryGenreName: this.props.location.state.song.primaryGenreName, 
        artworkUrl100: this.props.location.state.song.artworkUrl100,
        trackViewUrl: this.props.location.state.song.trackViewUrl, 
        previewUrl: this.props.location.state.song.previewUrl
  }

  handleClick = song => {
      debugger
    this.props.addSong(song);
    this.props.history.push("/saved");
  };


  render() {
     const song = this.state;
    return (
      <div>
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