import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Images from './pages/Images'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
         <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/images' exact component={Images}/>
          
        </Switch>


      </Router>
    </div>
  );
}

export default App;
