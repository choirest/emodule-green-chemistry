import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'

const Navbar = () => {
  return (
    <div className="p-6 flex justify-between items-center shadow-lg border-b bg-white">
      <div className="flex gap-4">
        <SidebarTrigger size="icon" />
      </div>
    </div>
  )
}

export default Navbar