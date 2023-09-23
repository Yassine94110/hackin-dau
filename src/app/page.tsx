import { SolarCard } from '@/components';
import Balances from '@/components/Balances';
import { BiWalletAlt, BiSolidCollection } from 'react-icons/bi';

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-4 overflow-y-scroll'>
      <div className='col-span-1 bg-white rounded-xl p-6'>
        <div className='flex gap-2 items-center'>
          <BiWalletAlt size={30} />
          <h1 className='text-2xl font-bold'>Buy HSC</h1>
        </div>
        <div className='mt-2 font-semibold text-slate-400'></div>
      </div>

      <Balances />

      <div className='col-span-2 bg-white rounded-xl p-6'>
        <div className='flex gap-2'>
          <BiSolidCollection size={30} />
          <h1 className='text-2xl font-bold items-center'>Collection</h1>
        </div>
        <div className='mt-8 grid grid-cols-2 gap-4'>
          <SolarCard />
          <SolarCard />
          <SolarCard />
          <SolarCard />
          <SolarCard />
        </div>
      </div>
    </div>
  );
}
