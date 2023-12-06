import Charts from '@/components/charts'
import SyncCharts from '@/components/syncAreaCharts';
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import React, { useContext, useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { UserContext } from '@/userContext';
import { getDatabase, ref, onValue } from "firebase/database";
interface HomeProps {
  // Add your prop types here
}


const Home: React.FC<HomeProps> = ({ }) => {
  const [data2, setData] = useState<{ name: string; uv: any; pv: any; amt: any; }[]>([]);



  return (
    <>
      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center font-pregular '>
        {/* Hello {user.displayName} */}
        <Button onClick={() => toast("Sign up failed due to wrong credentials", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: <Icon icon="maki:cross" />,
            onClick: () => console.log("Undo"),
          },
        })}>Show toast{"user.email"}</Button>
      </div>

      <Charts data={data2}></Charts>
      <SyncCharts data={data2}></SyncCharts>
      {/* <div>{data2[data2.length - 1].name}</div> */}
    </>
  )
}

export default Home