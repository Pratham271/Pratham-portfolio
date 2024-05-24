import React, { Dispatch, SetStateAction } from 'react'

const Alert = ({name, setShowAlert}:{name:string,setShowAlert:Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-50'>

<div id="alert-additional-content-5" className="p-4 border rounded-lg border-zinc-600 bg-zinc-800 " role="alert">
  <div className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 me-2 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span className="sr-only">Info</span>
    <h3 className="text-lg font-medium text-gray-300">Thank you for contacting me {name}</h3>
  </div>
  <div className="mt-2 mb-4 text-sm text-gray-300">
  I will get back to you as soon as possible 
  </div>
  <div className="flex">
    <button type="button" onClick={()=> setShowAlert(false)} className=" bg-transparent border focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 text-center border-gray-600 hover:bg-gray-600 focus:ring-gray-800 text-gray-300 hover:text-white" data-dismiss-target="#alert-additional-content-5" aria-label="Close">
      Dismiss
    </button>
  </div>
</div>
    </div>

  )
}

export default Alert
