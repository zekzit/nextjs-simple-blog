import { formatDate } from '@/helper/helper'
import { dbGetBlog } from '@/services/blog-service'
import React from 'react'

async function BlogPage({params}) {
    const blog = await dbGetBlog(params.blogId)
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog: {blog.title}</h1>
                <div className="text-xs">ผู้เขียน: {blog.author}</div>
                <div className="text-xs">วันที่: {formatDate(blog.publishDateTime)}</div>
            </div>
            <pre className='whitespace-pre-line'>
                {blog.content || "ไม่มีเนื้อหา"}
            </pre>
            <div>
                <a href="/blogs" className='btn btn-link px-0 mt-4'>&lt;&nbsp;Back</a>
            </div>
        </div>
    )
}

export default BlogPage