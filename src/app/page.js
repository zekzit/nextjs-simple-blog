
export default function Home() {
  return (
    <div className="hero bg-base-200 h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="rounded">
              <img src="/butter-bear.jpg" className="h-[20vh] object-contain" />
            </div>
          </div>
          <h1 className="text-5xl font-bold pt-6">สวัสดีคร่า</h1>
          <p className="py-6">
            สวัสดีค่ะ หนูชื่อหมีเนย มีอาชีพหลักในการรร้องเล่นเต้นระบำให้ทุกคนมีความสุขค่ะ ติดตามเรื่องที่หนูจะมาเล่าได้ที่นี่นะคะ
          </p>
          <a className="btn btn-primary" href="/blogs">อ่าน Blog เลย</a>
        </div>
      </div>
    </div>
  );
}
