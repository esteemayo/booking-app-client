import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Hotel, Layout, List, Login, NotFound } from 'pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hotels' element={<List />} />
          <Route path='hotels/:slug' element={<Hotel />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
