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
import ProfileView from './views/ProfileView';
import ShippingView from './views/ShippingView';
import PaymentView from './views/PaymentView';
import PlaceOrderView from './views/PlaceOrderView';
import OrderView from './views/OrderView';


function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/order/:id' component={OrderView} />
            <Route path='/placeorder' component={PlaceOrderView} />
            <Route path='/shipping' component={ShippingView} />
            <Route path='/payment' component={PaymentView} />
            <Route path='/profile' component={ProfileView} />
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
