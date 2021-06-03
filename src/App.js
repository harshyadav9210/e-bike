import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route} from 'react-router-dom';
import SignupPage from './pages/signup-page';
import RentPage from './pages/rent-page';
import CheckoutPage from './pages/checkout-page';

const App = () => {
  return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignupPage} />
        <Route path='/rent' component={RentPage} />   
        <Route path='/checkout/:id' component={CheckoutPage} /> 
      </div>
  );
}

export default App;
