import React from 'react'

const Cart = ({ className, width, height }: IconProps) => { //stroke-white, fill-white
    return (
        <svg width={width?width:"20"} height={height?height:"20"} viewBox={`0 0 ${width?width:"20"} ${height?height:"20"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_111_51)">
                <path d="M6.66668 18.3332C7.12691 18.3332 7.50001 17.9601 7.50001 17.4998C7.50001 17.0396 7.12691 16.6665 6.66668 16.6665C6.20644 16.6665 5.83334 17.0396 5.83334 17.4998C5.83334 17.9601 6.20644 18.3332 6.66668 18.3332Z" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8333 18.3332C16.2936 18.3332 16.6667 17.9601 16.6667 17.4998C16.6667 17.0396 16.2936 16.6665 15.8333 16.6665C15.3731 16.6665 15 17.0396 15 17.4998C15 17.9601 15.3731 18.3332 15.8333 18.3332Z" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.70834 1.7085H3.37501L5.59168 12.0585C5.67299 12.4375 5.8839 12.7764 6.1881 13.0167C6.4923 13.257 6.87077 13.3838 7.25834 13.3752H15.4083C15.7877 13.3745 16.1554 13.2446 16.4509 13.0067C16.7463 12.7688 16.9518 12.4373 17.0333 12.0668L18.4083 5.87516H4.26668" className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_111_51">
                    <rect width={width?width:"20"} height={height?height:"20"} className={className}/>
                </clipPath>
            </defs>
        </svg>

    )
}

export default Cart
