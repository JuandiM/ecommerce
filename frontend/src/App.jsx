import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ProductView from './views/EachProductView'
import EachProductView from './views/EachProductView';


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomeView} />
            <Route path='/product/:id' component={EachProductView} />
        </Container>
      
        </main>
        <Footer />
    </Router>
  );
}

export default App;
