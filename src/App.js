import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Restaurant from './Restaurant';
import Favorites from './Favorites';
import SearchBar from './SearchBar';
import store from './store';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      location: ''
    };
  }

  handleSearch = (searchTerm, location) => {
    this.setState({ searchTerm, location });
  }

  render() {
    const { searchTerm, location } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1 className="App-header">Ravenous</h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/favorites">Favorites</Link>
            </nav>
            <Routes>
              <Route path="/" element={<>
                <SearchBar onSearch={this.handleSearch} />
                <Restaurant searchTerm={searchTerm} location={location} />
              </>} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;