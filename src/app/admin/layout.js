import React from 'react'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'

function AdminLayout({ children }) {
    
    async function doLogout() {
        "use server"
        cookies().delete("session");
        redirect("/");
    }

    return (
        <>
            <div className="w-screen bg-black text-white p-8 py-4 flex">
                <div>
                    <a href="/admin" className="btn btn-link btn-sm text-lg text-white no-underline">Admin Zone</a>
                </div>
                <div className='flex-1 flex justify-end'>
                    <a href="/admin/blogs" className="btn btn-link btn-sm text-white no-underline">Blogs</a>
                    <form action={doLogout}>
                    <button htmlType="submit" className="btn btn-link btn-sm text-white no-underline">Logout</button>
                    </form>
                </div>
            </div>
            {children}
        </>
    )
}

export default AdminLayout