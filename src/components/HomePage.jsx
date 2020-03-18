import React from 'react'
import { Link } from 'react-router-dom';
// import '../homepage.styles.css'

const HomePage = () => {
    return (
    <div>
        <h1>Welcome to Sonica</h1>
        <Link to="/search"><button>Search</button></Link>
    </div>
    )
}
    
export default HomePage