import React from 'react'
import { Link } from "react-router-dom";

function SongItem() {
    const song = this.props.song;

    return (
      <div data-id={song.trackId}>
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