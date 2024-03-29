import { Provider } from 'react-redux';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { store } from './Redux/configureStore';
import Home from './Components/Home';
import NavBar from './Components/Header';
import Details from './Components/Details';

function App() {
  const [page, setPage] = useState('home');
  return (
    <Provider store={store}>
      <Router>
        <NavBar page={page} set={setPage} />
        <Routes>
          <Route path="/" element={<Home page={page} set={setPage} />} />
          <Route path="/coin" element={<Details />}>
            <Route path=":coinId" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
