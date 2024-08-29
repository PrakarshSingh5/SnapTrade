import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import PhotoManagement from '../components/seller/PhotoManagement'

const Seller = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <DashboardSidebar/>
        <div>

        </div>
        <PhotoManagement/>
    </div>
  )
}

export default Seller
