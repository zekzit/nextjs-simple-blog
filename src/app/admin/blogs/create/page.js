import BlogForm from '@/components/BlogForm'
import { dbCreateBlog } from '@/services/blog-service';
import { redirect } from 'next/navigation'
import React from 'react'

function BlogCreatePage() {

    async function createBlog(formData) {
        "use server"

        const newBlog = {
            title: formData.get("title"),
            author: formData.get("author"),
            content: formData.get("content"),
            publishDateTime: new Date().getTime(),
        }

        const createdBlog = await dbCreateBlog(newBlog);
        redirect("/admin/blogs");
    }

    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">New Blog</h1>
            </div>
            <BlogForm onSubmit={createBlog} />
        </div>
    )
}

export default BlogCreatePage