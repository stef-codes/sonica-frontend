import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../actions/song'
import JournalInputForm from './JournalInputForm'


class SongsSaved extends React.Component {
      componentDidMount() {
      this.props.getSongs();
  }
  state = {
      formFlag: false,
      formSongId: ""
    
  }

  handleClick = song => {
      debugger
    this.setState({
        formFlag: true, 
        formSongId: song.id
    })
  }

  resetFormFlag = e => {
    this.setState({
        formFlag: false,
        formSongId: ""
    })
  }

  render() {
    const songs = this.props.songs.map((song) => 

        <div>
        <br/>
            <strong>{song.trackName}</strong>
            <br/>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <br/>
            <button id={song.trackId} onClick={() => this.handleClick(song)}>
              Add to Journal
            </button>   
        <br/>
        </div>
        
    )
    return (
      <div>
       <h2>Your Saved Songs</h2>
        <ul>{this.props.loading ? <h3>...loading songs</h3> : songs} </ul>
        {this.state.formFlag ? <JournalInputForm resetForm={this.resetFormFlag} songId={this.state.formSongId} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Song State", state)
  return {
    songs: state.songReducer.songs,
    loading: state.songReducer.loading
  }
}

export default connect (mapStateToProps, {getSongs}) (SongsSaved)