import React from 'react'
import { Container} from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer';
import Main from './components/Main';
import Card from './components/Card';

const App = () => {
  return (
    <body>
     <Header/> 
    <Main/>
    <Card/>
    <Footer/>
    </body>
  )
}

export default App