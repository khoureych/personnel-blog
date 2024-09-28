import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Article from './components/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/article/:id" element={<Article title="Sample Title" content="Sample Content" />} />
        <Route path="*" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
