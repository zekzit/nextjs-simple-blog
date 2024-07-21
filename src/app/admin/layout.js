"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function AdminLayout({ children }) {
    const router = useRouter();
    return (
        <>
            <div className="w-screen bg-black text-white p-8 py-4 flex">
                <div className='mt-1'>Admin Zone</div>
                <div className='flex-1 flex justify-end'>
                    <a href="/admin/blogs" className="btn btn-link btn-sm text-white no-underline">Blogs</a>
                    <a href="/" className="btn btn-link btn-sm text-white no-underline">Logout</a>
                </div>
            </div>
            {children}
        </>
    )
}

export default AdminLayout