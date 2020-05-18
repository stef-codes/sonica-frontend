export const getEntries = () => {
    return (dispatch) => {
        dispatch({type:"LOADING_ENTRIES"})
        fetch("https://sonica.herokuapp.com/journals")
        .then(response => response.json())
        .then(data => {
          return dispatch({ type: "ENTRIES_LOADED", payload: data });
        });
    };
  };

export const addEntry = entry => {
    return dispatch => {
        dispatch({type: "LOADING_ENTRIES"})
        return fetch(`https://sonica.herokuapp.com/journals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(entry)
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "ADD_ENTRY", payload: data})
        })
    }
}