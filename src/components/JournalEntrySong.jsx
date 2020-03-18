import React from 'react'

function JournalEntrySong({song}) {
    return (
        <div>
            <br/>
            <strong>Song: </strong>{song.trackName}
        <br/>
            <strong>Artist: </strong>{song.artistName}
        <br/>
        <img src={song.artworkUrl100} alt={`${song.trackName}`} />
 
        <br/>
        </div>
    )
}

export default JournalEntrySong
