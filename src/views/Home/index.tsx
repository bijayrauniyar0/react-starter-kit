import { Button } from '@/components/radix/button';
import { toast } from 'react-toastify';
const Home = () => {
  return (
    <div>
      <p className="text-[4rem] font-bold">Welcome to Home page 🤠 😎 </p>
      <Button variant={'default'} onClick={() => toast('Lets Get Started')}>
        Click Me
      </Button>
    </div>
  );
};

export default Home;
