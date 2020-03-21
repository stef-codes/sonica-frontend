import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../actions/song'
import JournalEntrySong from '../components/JournalEntrySong'
import JournalEntryText from '../components/JournalEntryText'


class Journal extends React.Component {
      componentDidMount() {
      this.props.getSongs();
  }

  render() {
    const songs = this.props.songs.map((song) => 
    { 
      if (song.journals.length > 0) {
      return (
        <div data-id={song.trackId} className="journalEntry">
            <JournalEntrySong song={song} />
            <JournalEntryText text={song.journals} />
        </div>
      )}
      return null
    }
    
    )
    return (
      <div>
       <h2>Journal</h2>
        <ul>{this.props.loading ? <h3>...loading entries</h3> : songs}</ul>
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

export default connect (mapStateToProps, {getSongs}) (Journal)