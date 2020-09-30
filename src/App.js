import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Rate from './components/Rate/Rate';



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
            <Rate />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
