
import ContactComponent from '@/components/ContactComponent'
import NavBar from '@/components/NavBar'

import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-black'>
        <NavBar/>
        <ContactComponent/>
    </div>
  )
}

export default page
