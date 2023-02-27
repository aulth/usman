import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Subscribe = () => {
  const [email, setEmail] = useState();
  const handleOnChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  const subscribe = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/blog/subscribe', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    const json = await response.json();
    if (json.success) {
      toast.success(json.msg)
      setEmail("");
    }else{
      toast.error(json.msg)
    }
  }
  return (
    <>
      <Toaster position='top-right' />
      <div className="w-full rounded-lg p-4">
        <h2 className="font-bold">Stay Informed</h2>
        <p className='mt-1'>Subscribe to our mailing list to get the new updates.</p>
        <form onSubmit={subscribe} className='flex flex-col gap-4 mt-2'>
          <input onChange={handleOnChange} value={email} required type="email" className='rounded w-full p-1 border border-gray-200 focus:outline-cyan-400 focus:outline focus:border-none' placeholder='Email address' />
          <button type='submit' className='w-full bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded text-white font-semibold'>Subscribe</button>
        </form>
      </div>
    </>
  )
}

export default Subscribe