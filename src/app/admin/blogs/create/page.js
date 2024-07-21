import BlogForm from '@/components/BlogForm'
import React from 'react'

function BlogCreatePage() {
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">New Blog</h1>
            </div>
            <BlogForm />
        </div>
    )
}

export default BlogCreatePage