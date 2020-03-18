import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../actions/song'
import JournalEntrySong from './JournalEntrySong'
import JournalEntryText from './JournalEntryText'


class Journal extends React.Component {
      componentDidMount() {
      this.props.getSongs();
  }

  handleClick = e => {
      debugger
  }

  render() {
    const songs = this.props.songs.map((song) => 
    <div data-id={song.trackId} className="journalEntry">
        
        <JournalEntrySong song={song} />
        <div>
        <br/>
          <JournalEntryText text={song.journals} />
         <hr/>
        </div>
    </div>
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
      songs: state.songReducer.songs,
      loading: state.songReducer.loading
    }
}

export default connect (mapStateToProps, {getSongs}) (Journal)