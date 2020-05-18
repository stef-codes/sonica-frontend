import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const HomePage = () => {
    return (
    <Container fluid>
        <Image src="https://unsplash.com/photos/1oKxSKSOowE/100px250" fluid />
        <h1>Welcome to Sonica</h1>
        <Link to="/search"><button>Search</button></Link>
    </Container>
    )
}
    
export default HomePage