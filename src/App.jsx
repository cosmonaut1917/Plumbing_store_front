// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import Title from './components/Header';
import './App.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <header className=''> 
    <Title className = 'title' />
    <Nav  />
    </header>
      
      <main className ="mx-3">
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
