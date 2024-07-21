import React from 'react'

function BlogListingPage() {
    return (
        <div className="container mx-auto">
            <div className="pt-8 pb-6">
                <h1 className="text-2xl font-bold mb-2">Blog list</h1>
            </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>เทคนิคการเต้น</td>
                                <td>น้องหมีเนย</td>
                                <td>01/08/2567, 14:00</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>ข้างในหมีเป็นหมีใช่ไหม?</td>
                                <td>น้องหมีเนย</td>
                                <td>01/08/2567, 14:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BlogListingPage