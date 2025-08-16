export default function Home() {

  return (
    <>
      {/* TODO: 使用者可用於送出訊息的表單 */}
      <header className="mb-6 pt-20 pb-10">
        <form className="container mx-auto flex gap-3">
          <input
            type="text"
            placeholder="輸入訊息"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
          >
            送出
          </button>
        </form>
      </header>

      {/* TODO: 用於顯示訊息的區塊 */}
      <section id="message-container" className="container mx-auto">
        {/* 訊息將顯示在這裡 */}
        <div className="text-gray-500 text-center py-8">
          尚無訊息
        </div>
      </section>
    </>
  );
}
