import React from 'react'
// import '../search.styles.css'
import SongItem from '../components/SongItem'

class Search extends React.Component {
    state = {
        trackId: "",
        searchTerm: "",
        searchResults: []
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        let searchValue =  this.state.searchTerm
        let searchString = searchValue.replace(" ", "+")
        console.log(searchValue.replace(" ", "+"))
        console.log(e.target)
        fetch(`https://itunes.apple.com/search?term=${searchString}&media=music`)
        .then(response => response.json())
        .then(songs => {
            this.setState({
                searchResults: songs.results
            })
        })

        this.setState({
            showResults: true

        })
    }

    handleClick = id => {
        this.setState({
            trackId: id,
            showResults: true
        })
    }

    handleValue = id => {
        this.setState({
            trackId: id,
            showResults: true
        })
    }




    render () {


             const {searchResults} = this.state; 

        
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h3>Search for a Song</h3>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Nipsey Hussle" />
                    <button type="submit">Search</button> 
                </form>
               <br></br>
        
               <div>
                   {searchResults.map(song =>
                    <div data-id={song.trackId}>
                        <SongItem key={song.trackId} song={song} />                 
                    </div>
                    )}
               </div>
            </div>
        )
    }      
}
    
export default Search