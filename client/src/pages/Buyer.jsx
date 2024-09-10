import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import Analytics from '../components/Analytics'
import Orders from '../components/Orders'
import { useSelector } from 'react-redux'
import Photopurchased from '../components/buyer/Photopurchased'
import Favourites from '../components/Favourites'

const Buyer = () => {
  const tab=useSelector((state)=>state.nav.tab);
  return (
    <div className='flex flex-col sm:flex-row'>
        <DashboardSidebar/>
        <div>
        {(() => {   
          switch(tab){
            case "photos-purchased":
               return <Photopurchased/>;
            case "analytics":
               return <Analytics/>;
            case "orders":
               return <Orders/>;
            case "favourites":
                return <Favourites/>;

            default: 
               return <Photopurchased/>;
          }
        })()}
        </div>
       
    </div>
  )
}

export default Buyer
