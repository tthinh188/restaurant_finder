import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantDetail from './components/RestaurantDetail';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/restaurants/:id/update" component={RestaurantUpdate}/>
          <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
