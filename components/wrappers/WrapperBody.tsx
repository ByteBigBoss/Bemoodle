import React from 'react'

interface WrapperBodyProps{
    children:React.ReactNode;
    className?:string;
}

const WrapperBody = ({children,className}:WrapperBodyProps) => {
    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <div className='desktop:w-[1133px] wide:w-[1400px] mobile:w-full tab:w-[90%] mobile:box-border mobile:px-[16px] '>
                {children}
            </div>
        </div>
    )
}

export default WrapperBody
