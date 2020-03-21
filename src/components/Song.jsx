import React from 'react'

function Song({song, handleClick}) {
    return (
        <div>
        <br/>
            <strong>{song.trackName}</strong>
            <br/>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <br/>
            <button id={song.trackId} onClick={() => handleClick(song)}>
              Add to Journal
            </button>   
        <br/>
        </div>
    )
}

export default Song
