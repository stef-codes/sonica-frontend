import React from 'react'
import { connect } from 'react-redux'
import { getSongs } from '../actions/song'


class Journal extends React.Component {
      componentDidMount() {
      this.props.getSongs();
  }

  handleClick = e => {
      debugger
  }

  render() {
    const songs = this.props.songs.map((song) => 
    <>
        <div>
        <br/>
            Song: {song.trackName}
        <br/>
            Artist: {song.artistName}
 
        <br/>
        </div>
        
        <div>
            {song.journals.map((entry) => 

            <div>
                Feeling: {entry.feeling_name}
            <br/>
                Entry: {entry.entry_text}
            </div>

            )}
        </div>
    </>
    )

    return (
      <div>
       <h2>Journal</h2>
        <ul>{this.props.loading ? <h3>...loading entries</h3> : songs} </ul>
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