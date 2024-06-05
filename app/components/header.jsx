import React from 'react'
import { getData } from '../data'
import Link from 'next/link'


export default async function header() {
    const data = await getData()




    
  return (
    <header>
     
        {data.map((item) => (
          <div key={item.id}>
            <div className="items" > 

          <Link href="https://m-moviehd.online/"> 
          
        
           <img src={`https://pphone168.com/uploads/img/${item.img}`} alt={item.name} width="100" />
           </Link>
           </div>
          </div>
        ))}
    </header>
  )
}
