import React from 'react'
import { Link } from "react-router-dom";

function SongItem({song}) {
    return (
      <div data-id={song.trackId}>
          <h3>{song.artistName}</h3>
          <img src={song.artworkUrl100} alt={`${song.trackName}`} />
          <h3>
            <Link
              to={{
                pathname: `/song/${song.trackId}`,
                state: { song }
              }}
            >
              {song.trackName}
            </Link>
          </h3>
      </div>
    );
  
}


export default SongItem