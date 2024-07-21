import BlogForm from '@/components/BlogForm'
import { dbGetBlog, dbUpdateBlog } from '@/services/blog-service'
import React from 'react'
import { redirect } from 'next/navigation';

async function BlogEditingPage({params}) {
    const blog = await dbGetBlog(params.blogId)

    async function updateBlog(formData) {
        "use server"

        const updateBlog = {
            _id: formData.get("_id"),
            title: formData.get("title"),
            author: formData.get("author"),
            content: formData.get("content"),
            publishDateTime: new Date().getTime(),
        }

        await dbUpdateBlog({_id: updateBlog._id}, updateBlog, {});
        redirect("/admin/blogs");
    }

    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog edit: {blog.title}</h1>
            </div>
            <BlogForm blog={blog} onSubmit={updateBlog}/>
        </div>
    )
}

export default BlogEditingPage