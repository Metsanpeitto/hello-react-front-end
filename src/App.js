import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/greetings" element={<Greetings />} />
          <Route
            path="/"
            element={<Link to="/greetings"> New greeting</Link>}
          />

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
