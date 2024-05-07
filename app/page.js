export default function Home() {
  return (
    <>
      {/* 컨텐츠 */}
      <div className="max-w-screen-xl mx-auto w-full h-[400px] bg-muted"></div>
      {/* 컨텐츠2 */}
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-[2fr_1fr] gap-x-10 my-10">
        {/* gird1 */}
        <div className="w-full h-[300px] bg-muted"></div>
        {/* gird2 */}
        <div className="w-full h-[300px] bg-muted"></div>
      </div>
    </>
  );
}
