import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Carousel from '../components/Carousel';


const Home: NextPage = () => {
  return (
    <div className='m-96'>
      <Carousel/>
      <div className='fixed bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2'><ConnectButton/></div>
    </div>

  );
};

export default Home;
