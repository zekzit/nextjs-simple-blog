import React from 'react'

function BlogList({ hasAction = false }) {
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
                        <tr>
                            <th>1</th>
                            <td>เทคนิคการเต้น</td>
                            <td>น้องหมีเนย</td>
                            <td>01/08/2567, 14:00</td>
                            {hasAction && (<td>
                                <a className="btn btn-link" href="/admin/blogs/1">แก้ไข</a>
                                <button href="/admin/blogs/1" className='btn btn-link'>ลบ</button>
                            </td>)}
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>ข้างในหมีเป็นหมีใช่ไหม?</td>
                            <td>น้องหมีเนย</td>
                            <td>01/08/2567, 14:00</td>
                            {hasAction && (<td>
                                <a className="btn btn-link" href="/admin/blogs/2">แก้ไข</a>
                                <button href="/admin/blogs/2" className='btn btn-link'>ลบ</button>
                            </td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BlogList