import BlogList from '@/components/BlogList'
import React from 'react'

function AdminBlogListingPage() {
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <div className='float-right'>
                    <a className='btn btn-primary btn-sm' href="/admin/blogs/create">เพิ่มใหม่</a>
                </div>
                <h1 className="text-2xl font-bold mb-2">Blog list</h1>
            </div>
            <BlogList hasAction={true} />
        </div>
    )
}

export default AdminBlogListingPage