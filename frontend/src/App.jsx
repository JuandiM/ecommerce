import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import EachProductView from './views/EachProductView';
import CartView from './views/CartView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/register' component={RegisterView} />
            <Route path='/login' component={LoginView} />
            <Route path='/product/:id' component={EachProductView} />
            <Route path='/cart/:id?' component={CartView} />
            <Route exact path='/' component={HomeView} />
        </Container>
      
        </main>
        <Footer />
    </Router>
  );
}

export default App;
