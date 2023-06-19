import React from 'react'
import './spinner.css'

const Spinner = () => {
    return (
        <div className='h-screen flex justify-center mt-[150px]'>
            <div className="fingerprint-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
            </div>
        </div>
    )
}

export default Spinner