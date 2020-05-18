export const getSongs = () => {
    return (dispatch) => {
        dispatch({type:"LOADING_SONGS"})
        fetch("https://sonica.herokuapp.com/songs")
        .then(response => response.json())
        .then(data => {
          return dispatch({ type: "SONGS_LOADED", payload: data });
        });
    };
  };

export const addSong = song => {
    return dispatch => {
        dispatch({type: "LOADING_SONGS"})
        return fetch(`https://sonica.herokuapp.com/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(song)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "ADD_SONG", payload: data})
        })
    }
}

