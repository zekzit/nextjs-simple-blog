import BlogForm from '@/components/BlogForm'
import React from 'react'

function BlogEditingPage() {
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog edit</h1>
            </div>
            <BlogForm />
        </div>
    )
}

export default BlogEditingPage