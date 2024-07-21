import BlogList from '@/components/BlogList'
import { dbDeleteBlog, dbListBlog } from '@/services/blog-service';
import React from 'react'
import { redirect } from 'next/navigation';

async function AdminBlogListingPage() {
    const blogs = await dbListBlog();

    async function handleOnDelete(_id) {
        "use server"

        const result = await dbDeleteBlog(_id);
        redirect("/admin/blogs");
    }

    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <div className='float-right'>
                    <a className='btn btn-primary btn-sm' href="/admin/blogs/create">เพิ่มใหม่</a>
                </div>
                <h1 className="text-2xl font-bold mb-2">Blog list</h1>
            </div>
            <BlogList blogs={blogs} hasAction={true} onDelete={handleOnDelete}/>
        </div>
    )
}

export default AdminBlogListingPage