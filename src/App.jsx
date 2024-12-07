import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import AuthLayout from './layouts/AuthLayout';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Navigate to="/signin" replace />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
