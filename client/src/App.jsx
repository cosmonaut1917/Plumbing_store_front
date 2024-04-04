import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'
import Title from './components/Header';
import './App.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <ApolloProvider client={client}>
    <header className=''> 
   
    <Title className = 'title' />
    
    </header>
      
      <main className ="mx-3">
      <Outlet />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default App;

