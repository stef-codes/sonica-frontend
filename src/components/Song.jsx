import React from 'react'

function Song({song, handleClick}) {
    return (
        <div>
        <br/>
            <h3>{song.trackName}</h3>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <br/><br/>
             Genre: {song.primaryGenreName}
            <br/><br/>
            <button id={song.trackId} onClick={() => handleClick(song)}>
              Add to Journal
            </button>   
        <br/>
        </div>
    )
}

export default Song
