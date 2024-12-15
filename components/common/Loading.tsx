import React from 'react'
import {Spinner} from "@nextui-org/react";

const Loading = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center '>
      <Spinner label="Loading..." color="warning" />
    </div>
  )
}

export default Loading
