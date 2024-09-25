import React from 'react'

const E02Path = () => {
    return (
        <div>
            <h3>E02Path</h3>
            <svg width={100} height={100} style={{ border: "1px solid red" }}>
                <path 
                    d='M25,25 L25,35
                       M75,25 L75,35
                       M15,65 C20,100 80,100 85,65'
                    stroke='blue'
                    strokeWidth={5}
                    fill='none'
                
                />
            </svg>
        </div>
    )
}

export default E02Path