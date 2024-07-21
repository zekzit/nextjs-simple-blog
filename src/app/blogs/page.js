import BlogList from '@/components/BlogList'
import React from 'react'

function BlogListingPage() {
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog list</h1>
            </div>
            <BlogList />
        </div>
    )
}

export default BlogListingPage