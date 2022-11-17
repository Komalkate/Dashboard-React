import React from 'react'
import {DropdownMenu,Search, ProfileIcon} from '../../Data/DashboardData.jsx'

function Navbar() {
  return (
    <>
      <div className="px-3 sticky-top d-flex justify-content-between align-items-center NavBar">
        <div className="d-flex align-items-center">
          <div>
            <DropdownMenu/>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <Search />
          </div>
          <div>
            <ProfileIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar