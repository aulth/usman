import React from 'react'
import { ChatEngine } from 'react-chat-engine';
const page = () => {
  return (
    <>
   {
    typeof window!=undefined &&
    <ChatEngine
    projectID='8f122c60-5fc5-419d-8063-d33d37a4fbb1'
    userName='usman'
    userSecret='1234'
/>
   }
    </>
  )
}

export default page