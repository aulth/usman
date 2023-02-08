import React, { useState } from 'react'
import { GrReactjs } from 'react-icons/gr'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import { BsCodeSlash } from 'react-icons/bs'
import { ImUser } from 'react-icons/im'
import {MdAlternateEmail} from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast';
const ContactSection = () => {
  const [data, setData] = useState({name:'', email:'', message:''});
  const handleOnChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]:e.target.value});
    console.log(data)
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(!data.name){
      toast.error("Enter Name")
      return;
    }
    if(!data.email){
      toast.error("Enter Email")
      return;
    }
    if(!data.message){
      toast.error("Please Type Message")
      return;
    }
    // toast.success("Message Sent")
    toast.promise(new Promise(async (resolve, reject)=>{
      const response = await fetch('/api/contact', {
        method:'POST',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify({data})
      })
      const json = await response.json();
      setData({name:'', email:'', message:''})
      if(json.success){
        resolve();
      }else{
        reject();
      }
    }), {
      loading:'Sending',
      success:'Message Sent',
      error:'Failed'
    })
    
  }
  return (
    <div id='contact' className="container md:p-12 px-2  m-auto  flex flex-col-reverse md:flex-row justify-center h-[calc(100vh-60px)]">
      <div className="w-full p-8">
        <h2 className="text-left font-semibold md:text-3xl text-2xl text-white">Love to hear from you,</h2>
        <h2 className="text-left font-semibold md:text-3xl text-2xl text-white ">Get in touch 👋</h2>
        <form onSubmit={handleOnSubmit} className="w-full mt-8">
          <div className="w-full flex gap-2 flex-col md:flex-row">
            <div className="w-full  md:w-1/2 flex items-center border-b border-gray-400">
              <div className="bg-gray-400 p-1">
                <ImUser className='text-2xl' />
              </div>
              <input type="text" value={data.name} name='name' onChange={handleOnChange} className='w-full p-1 focus:outline-none border-none bg-transparent text-[#73F8AB]' placeholder='Your name' />
            </div>
            <div className="w-full md:w-1/2 flex border-b border-gray-400 items-center md:mt-0 mt-4">
              <div className="bg-gray-400 p-1">
                <MdAlternateEmail className='text-2xl' />
              </div>
              <input type="text" value={data.email} name='email' onChange={handleOnChange} className='w-full p-1 focus:outline-none border-none bg-transparent  text-[#73F8AB]' placeholder='Email' />
            </div>
          </div>
          <div className="w-full mt-4">
            <textarea name="message" value={data.message} onChange={handleOnChange} placeholder='Message' id="" className='w-full h-48 p-1 focus:outline-none  bg-transparent border-b shadow border-gray-400  text-[#73F8AB]' cols="30" rows="10"></textarea>
          </div>
          <button type='submit' className="px-2 py-1 rounded bg-[#73F8AB] mt-4">Send Message</button>
          <Toaster position='top-right'/>
        </form>
      </div>
    </div>
  )
}

export default ContactSection