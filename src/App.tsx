import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetails from './modules/pages/TaskDetails';
import TodoList from './modules/TodoList';
import Increment from './modules/Increment';
import Home from './modules/pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/increment" element={<Increment />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
