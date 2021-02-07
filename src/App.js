import './App.css';
import {Switch, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products/' component={Products} />
        <Route path='/product/:slug' component={Product} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
