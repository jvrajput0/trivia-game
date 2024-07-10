
import React from 'react';
import {useNavigate, useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const correctCount = location.state?.correctCount;
  const incorrectCount = location.state?.incorrectCount;

  let navigate = useNavigate(); 
  const startPage = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div className='font-mainFont bg-blue-950 size-full h-dvh	flex justify-center items-center tracking-wider'>
      <div className="box flex justify-center items-center flex-col">
        <h1 className='font-dotFont text-slate-50	text-4xl font-bold mb-2.5	'>Results</h1>
        <h4 className='text-green-500	text-lg	font-bold mb-2.5	'>Total Questions Served: 10</h4>
        <p className='text-zinc-200	text-sm	font-bold mb-5	'>Total Correct Questions: {correctCount}</p>
        <p className='text-zinc-200	text-sm	font-bold mb-5	'>Total Incorrect Questions: {incorrectCount}</p>
        <button className='StartBtn text-zinc-200 text-sm px-3 py-2 bg-blue-900 border border-slate-500 rounded-lg	hover:bg-transparent' onClick={startPage}>Home Page</button>
      </div>
    </div>
  );
};

export default Results;
