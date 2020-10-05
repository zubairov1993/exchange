import React from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Rate from './components/Rate/Rate';
import About from './components/About/About';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site">
        <Header />
        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path='/' component={Rate} />
                <Route exact path='/about' component={About} />
              </Switch>
            </Router>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
