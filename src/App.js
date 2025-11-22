import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      <p className='text-center fs-1'>I'm ready for workshop!</p>

    </div>
  );
}

export default App;
