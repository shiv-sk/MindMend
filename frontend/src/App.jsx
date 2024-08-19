import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Chat from './Chat';
import Home from './Home';
import FindTherapists from './FindTherapists';
import BlogPage from './BlogPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/findtherapists" element={<FindTherapists />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* Redirect all unknown paths to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

