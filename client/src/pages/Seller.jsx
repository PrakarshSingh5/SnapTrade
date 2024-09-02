import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import PhotoManagement from '../components/seller/PhotoManagement'
import Analytics from '../components/Analytics'

const Seller = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <DashboardSidebar/>
        <div>

        </div>
        {/* <Analytics/> */}
        <PhotoManagement/>
    </div>
  )
}

export default Seller
