import BlogForm from '@/components/BlogForm'
import React from 'react'

function BlogEditingPage() {

    async function updateBlog(formData) {
        "use server"

        const updateBlog = {
            _id: formData.get("_id"),
            title: formData.get("title"),
            author: formData.get("author"),
            content: formData.get("content")
        }

        console.log(updateBlog);
    }

    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog edit</h1>
            </div>
            <BlogForm onSubmit={updateBlog}/>
        </div>
    )
}

export default BlogEditingPage