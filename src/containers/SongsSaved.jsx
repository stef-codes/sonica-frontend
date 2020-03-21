import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../actions/song'
import JournalInputForm from './JournalInputForm'
import Song from '../components/Song'


class SongsSaved extends React.Component {
      componentDidMount() {
      this.props.getSongs();
  }
  state = {
      formFlag: "",
      formSongId: ""
    
  }

  handleClick = song => {
      debugger
    this.setState({
        formFlag: song.id, 
        formSongId: song.id
    })
  }

  resetFormFlag = e => {
    this.setState({
        formFlag: "",
        formSongId: ""
    })
  }

  render() {
    const songs = this.props.songs.map((song) => 
    <div>
      <Song song={song} handleClick={this.handleClick}/>
      {this.state.formFlag === song.id ? <JournalInputForm resetForm={this.resetFormFlag} songId={song.id} /> : null}
    </div>
    )
    return (
      <div>
       <h2>Your Saved Songs</h2>
      {/* {this.state.formFlag ? <JournalInputForm resetForm={this.resetFormFlag} songId={this.state.formSongId} /> : null} */}
        <ul>{this.props.loading ? <h3>...loading songs</h3> : songs} </ul>
 
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Song State", state)
  return {
    songs: state.songReducer.songs.reverse(),
    loading: state.songReducer.loading
  }
}

export default connect (mapStateToProps, {getSongs}) (SongsSaved)