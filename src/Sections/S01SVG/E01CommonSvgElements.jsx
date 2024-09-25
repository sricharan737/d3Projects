import React from 'react'

const E01CommonSvgElements = () => {
    return (
        <div>
            <h3>E01CommonSvgElements</h3>
            <svg width={800} height={800} style={{ border: "5px solid red" }}>
                <rect width={200} height={200} x={100} y={100} fill='blue' />

                <circle r={50} fill='yellow' cx={100} cy={500} />
                
                <text x={100} y={500} fill='blue'>Hello World</text>
            </svg>
        </div>
    )
}

export default E01CommonSvgElements