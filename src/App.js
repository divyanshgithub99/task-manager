import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskList from './components/TaskList';
import authService from './services/authService';

const App = () => {
  const user = authService.getCurrentUser();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tasks" element={user ? <TaskList /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
