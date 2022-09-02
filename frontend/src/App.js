import React from 'react'
import { Container} from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Card from './components/Card';

const App = () => {
  return (
    <>
     <Header/> 
    <Main/>
    <Card/>
    <Footer/>
    </>
  )
}

export default App