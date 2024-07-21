import BlogList from '@/components/BlogList'
import React from 'react'
import { dbListBlog } from '@/services/blog-service';

async function BlogListingPage() {
    const blogs = await dbListBlog();
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog list</h1>
            </div>
            <BlogList blogs={blogs} />
        </div>
    )
}

export default BlogListingPage