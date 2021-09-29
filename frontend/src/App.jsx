import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeView from './views/HomeView';


function App() {
  return (
    <>
    <Header />
    <main className='py-3'>
      <Container>
        <HomeView />
      </Container>
     
      </main>
      <Footer />
    </>
  );
}

export default App;
