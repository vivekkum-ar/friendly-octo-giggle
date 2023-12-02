import Charts from '@/components/charts'
import SyncCharts from '@/components/syncAreaCharts';
import { Button } from '@/components/ui/button'
import React from 'react';
interface HomeProps {
  // Add your prop types here
}


const Home: React.FC<HomeProps> = ({}) => {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 1000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
  },
  ];
  return (
    <>
    <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center font-bold '>
      
    </div>
    
    <Charts></Charts>
    <SyncCharts data={data}></SyncCharts>
    
    </>
  )
}

export default Home