import React from 'react';
import './App.css';
import Header from './components/Header/Header';



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="site">
        <Header />
      </div>
    );
  }
}

export default App;
