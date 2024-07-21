import React from 'react'

function BlogForm() {
    return (
        <form>
            <div className='flex flex-col w-full'>
                <label className="form-control w-full max-w-xs mb-2">
                    <div className="label">
                        <span className="label-text font-bold">หัวข้อ</span>
                    </div>
                    <input type="text" placeholder="หัวข้อเรื่อง" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs mb-2">
                    <div className="label">
                        <span className="label-text font-bold">ชื่อผู้เขียน</span>
                    </div>
                    <input type="text" placeholder="นามปากกา เช่น หมีเนย" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold">เนื้อหา</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-[50vh]" placeholder="เนื้อหาของ Blog กรุณางดใช้คำเสียดสี หยาบคาย"></textarea>
                </label>
            </div>

            <button className='btn btn-primary w-full mt-4'>บันทึก</button>
        </form>
    )
}

export default BlogForm