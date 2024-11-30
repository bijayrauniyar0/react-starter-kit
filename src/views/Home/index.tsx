import React from 'react';
import { Button } from '@Components/radix/button';
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-custom-progress-bar';

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-12 bg-[#313035]">
      <p className="text-[4rem] font-bold text-blue-300">
        Welcome to Home page 🤠 😎{' '}
      </p>
      <Button variant='outline' onClick={() => toast('Lets Get Started')}>
        Click Me
      </Button>
      <div className="w-1/4">
        <ProgressBar progress={70} />
      </div>
    </div>
  );
};

export default Home;
