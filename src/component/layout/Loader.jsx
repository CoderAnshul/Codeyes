import React from 'react'

export default function Loader() {
    return (
        <>
            <div className="flex items-center justify-center h-40">
                <div className="w-12 h-12 border-4 border-[#ffde8b] border-t-transparent rounded-full animate-spin"></div>
            </div>
        </>
    )
}