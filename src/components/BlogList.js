"use client"
import React from 'react'
import { formatDate } from '@/helper/helper';
import { useRouter } from 'next/navigation';

function BlogList({ blogs = [], hasAction = false, onDelete }) {
    const router = useRouter();
    const handleOnDelete = (_id) => {
        if (onDelete) {
            const confirmed = confirm("Really want to delete?");
            if (confirmed) onDelete(_id);
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>เรื่อง</th>
                            <th>ผู้เขียน</th>
                            <th>วันที่/เวลา</th>
                            {hasAction && (<th>การกระทำ</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, idx) => (
                            <tr key={blog._id}
                                className={`${!hasAction && "cursor-pointer hover:bg-gray-300"}`}
                                onClick={!hasAction ? (() => router.push(`/blogs/${blog._id}`)) : (() => { })}>
                                <th>{idx + 1}</th>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>{formatDate(blog.publishDateTime)}</td>
                                {hasAction && (<td>
                                    <a className="btn btn-link" href={`/admin/blogs/${blog._id}`}>แก้ไข</a>
                                    <button onClick={() => handleOnDelete(blog._id)} className='btn btn-link'>ลบ</button>
                                </td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BlogList