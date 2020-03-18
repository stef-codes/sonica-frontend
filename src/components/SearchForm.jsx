import React from 'react'

function SearchForm() {
    return (
        <div>
            <form onSubmit={this.handleSubmit} >
                <h3>Search for a Song</h3>
                <input type="text" name="searchTerm" onChange={this.handleChange} placeholder="Nipsey Hussle" />
                <button type="submit">Search</button> 
            </form>
        </div>
    )
}

export default SearchForm
