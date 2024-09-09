import React from 'react'

const Bell = ({ className, width, height }: IconProps) => { //stroke-white, fill-white
    return (
        <svg width={width?width:"20"} height={height?height:"20"}viewBox={`0 0 ${width?width:"20"} ${height?height:"20"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 6.6665C5 5.34042 5.52678 4.06865 6.46447 3.13097C7.40215 2.19329 8.67392 1.6665 10 1.6665C11.3261 1.6665 12.5979 2.19329 13.5355 3.13097C14.4732 4.06865 15 5.34042 15 6.6665C15 12.4998 17.5 14.1665 17.5 14.1665H2.5C2.5 14.1665 5 12.4998 5 6.6665Z" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.58331 17.5C8.7228 17.7537 8.92785 17.9653 9.17706 18.1127C9.42626 18.26 9.71046 18.3378 9.99998 18.3378C10.2895 18.3378 10.5737 18.26 10.8229 18.1127C11.0721 17.9653 11.2772 17.7537 11.4166 17.5" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Bell
