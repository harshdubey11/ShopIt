import React from 'react'

import AdminProductList from '../../features/admin/AdminProductList'
import Navbar from '../../features/Navbar/Navbar'

function AdminHomePage() {
  return (
    <div>
         <Navbar Children={AdminProductList}/>
    </div>
  )
}

export default AdminHomePage