export default (state = {entries: [], loading:false}, action) => {
    switch(action.type){
        case "LOADING_ENTRIES":
            return {
                ...state, 
                loading: true
            }
        case "ENTRIES_LOADED":
            return {
                ...state,
                entries: action.payload,
                loading: false
            }
        case "ADD_ENTRY":
            return {
                ...state,
                entries: [...state.entries, action.payload]
              
            }
        default:
            return state 
    }     
}