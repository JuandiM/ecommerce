import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import EachProductView from './views/EachProductView';
import CartView from './views/CartView';


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route exact path='/' component={HomeView} />
            <Route path='/product/:id' component={EachProductView} />
            <Route path='/cart/:id?' component={CartView} />
        </Container>
      
        </main>
        <Footer />
    </Router>
  );
}

export default App;
