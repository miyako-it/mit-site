import React from 'react'

const Contact = () => {
  return(
    <div className="max-w-5xl mx-auto">
      <div className="mx-auto py-16 pb-20">
        <h1 className="mb-16 font-san font-bold text-gray-900 text-4xl text-left">お問い合わせ</h1>
        <p className="font-serif text-gray-700 text-left">団体へのお問い合わせ窓口</p>
      </div>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSdyVYsvCKeQP5GRGG6VdnL3jgQaAr7EAFLXKV7GFuDeFtOfPA/formResponse">
        <label className="block">
          <span className="font-bold text-gray-700">お名前</span>
          <input
            type="text"
            name="entry.1381866584"
            className="form-input mt-4 block w-full"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block mt-4">
          <span className="font-bold text-gray-700">メールアドレス</span>
          <input
            type="email"
            name="entry.1405992146"
            className="form-input mt-4 block w-full"
            placeholder="example@gmail.com"
            required
          />
        </label>
        <label className="block mt-4">
          <span className="font-bold text-gray-700">お問い合わせ内容</span>
          <textarea
            name="entry.1780360931"
            className="form-textarea mt-4 block w-full"
            rows="5"
            placeholder="MITは素晴らしい"
            required
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            name="button"
            className="mt-4 p-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            value="送信">
              送信
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact