import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Question from './Question.js';
import Result from './Result.js';
import Start from './Start.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact component={<Start />} />
        <Route path="/Question" component={<Question />} />
        <Route path="/Result" component={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
