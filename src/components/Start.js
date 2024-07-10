import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';  
import Question from './Question.js';

const Start = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='font-mainFont bg-blue-950 size-full h-dvh flex justify-center items-center tracking-wider'>
        <div className="box flex justify-center items-center flex-col">
          <h1 className='font-dotFont text-slate-50 text-4xl font-bold mb-2.5'>The Trivia Game</h1>
          <h4 className='text-green-500 text-lg font-bold mb-2.5'>Welcome to The Quiz Game!</h4>
          <p className='text-zinc-200 text-sm font-bold mb-5'>10 questions to test your mastery</p>
          <button 
            className='StartBtn text-zinc-200 text-sm px-3 py-2 bg-blue-900 border border-slate-500 rounded-lg hover:bg-transparent' 
            onClick={() => navigate('/Question')}
          >
            Let's start
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/Question" element={<Question />} />
      </Routes>
    </>
  );
}

export default Start;
