import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative flex flex-row bg-[#F3F4F6] overflow-auto rounded-lg shadow-lg container p-6">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-[#DD2B1C] text-[15px] text-white w-[20px] h-[20px] rounded-full hover:text-gray-900"
                >
                    <p className='m-auto'>&times;</p>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal