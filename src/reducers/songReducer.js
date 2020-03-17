export default (state = {songs: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_SONGS":
            return {
                ...state, 
                loading: true
            }
        case "SONGS_LOADED":
            return {
                ...state,
                songs: action.payload,
                loading: false
            }
        case "ADD_SONG":
            return {
                ...state,
                songs: [...state.songs, action.payload]
            }
        default:
            return state 
    }     
}