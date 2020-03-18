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
            <strong>Song: </strong>{song.trackName}
        <br/>
            <strong>Artist: </strong>{song.artistName}
 
        <br/>
        </div>
        
        <div>
        <br/>
            {song.journals.map((entry) => 
            <div>
            <br/>
            <strong>Feeling: </strong>{entry.feeling_name}
            <br/>
            <strong>Entry: </strong>{entry.entry_text}
            <br/>
            </div>
            )}
         <hr/>
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