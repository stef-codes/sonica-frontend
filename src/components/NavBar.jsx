import React from 'react';
// import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

// const links = {
//     width: '100px',
//     padding: '12px',
//     margin: '0 6px 6px',
//     background: '#abb8c3',
//     color: 'white',
//     borderRadius: '5px'
// }


const NavBar = () => {
    return (
      <Nav fill variant="tabs" >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>  
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/songs" >Songs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/journal" >Journal</Nav.Link>
        </Nav.Item>
      </Nav>
    );
};

export default NavBar;