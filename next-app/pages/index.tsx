import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';


const Home: NextPage = () => {
  return (
    <div>
      <div className='font-exo text-cata-200 w-screen text-center grid items-center text-6xl animate-pulse bg-mods-100 h-screen'>Spacetime DAO   
      </div>
      <div className='fixed bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2'><ConnectButton/></div>
    </div>

  );
};

export default Home;
