"use client"
import React, { useEffect, useRef } from 'react'

function BlogForm({ blog, onSubmit }) {
    const formRef = useRef();

    useEffect(() => {
        if (blog) {
            const form = formRef.current;
            
            form.querySelectorAll("input").forEach((input) => {
                input.value = blog[input.name];
            });

            form.querySelectorAll("textarea").forEach((input) => {
                input.value = blog[input.name];
            });
        }
    }, [blog])

    return (
        <form ref={formRef} action={onSubmit}>
            <input name="_id" type="hidden" />
            <div className='flex flex-col w-full'>
                <label className="form-control w-full max-w-xs mb-2">
                    <div className="label">
                        <span className="label-text font-bold">หัวข้อ</span>
                    </div>
                    <input name="title" type="text" placeholder="หัวข้อเรื่อง" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control w-full max-w-xs mb-2">
                    <div className="label">
                        <span className="label-text font-bold">ชื่อผู้เขียน</span>
                    </div>
                    <input name="author" type="text" placeholder="นามปากกา เช่น หมีเนย" className="input input-bordered w-full max-w-xs" />
                </label>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold">เนื้อหา</span>
                    </div>
                    <textarea name="content" className="textarea textarea-bordered h-[50vh]" placeholder="เนื้อหาของ Blog กรุณางดใช้คำเสียดสี หยาบคาย"></textarea>
                </label>
            </div>

            <button className='btn btn-primary w-full mt-4'>บันทึก</button>
        </form>
    )
}

export default BlogForm