import React from 'react'

const Subscribe = () => {
  return (
    <div className="w-full rounded-lg p-4">
        <h2 className="font-bold">Stay Informed</h2>
        <p className='mt-1'>Subscribe to our mailing list to get the new updates.</p>
        <form className='flex flex-col gap-4 mt-2'>
            <input type="email" className='rounded w-full p-1 border border-gray-200 focus:outline-cyan-400 focus:outline focus:border-none' placeholder='Email address' />
            <button className='w-full bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded text-white font-semibold'>Subscribe</button>
        </form>
    </div>
  )
}

export default Subscribe