import React from 'react'
import Seo from 'components/Seo'

const Contact = () => {
  return (
    <div className="px-8 md:px-24">
      <div className="max-w-5xl mx-auto">
        <Seo title="Contact" />
        <div className="py-16 pb-20 mx-auto">
          <h1 className="mb-16 text-4xl font-bold text-center font-san text-namari">
            お問い合わせ
          </h1>
          <p className="font-serif text-lg text-center text-gray-700">
            団体へのお問い合わせ窓口
          </p>
        </div>
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdyVYsvCKeQP5GRGG6VdnL3jgQaAr7EAFLXKV7GFuDeFtOfPA/formResponse">
          <label className="block">
            <span className="font-bold text-namari">お名前</span>
            <input
              type="text"
              name="entry.1381866584"
              className="block w-full mt-4 placeholder-gray-600 bg-gray-100 form-input"
              placeholder="Your name"
              required
            />
          </label>
          <label className="block mt-4">
            <span className="font-bold text-namari">メールアドレス</span>
            <input
              type="email"
              name="entry.1405992146"
              className="block w-full mt-4 placeholder-gray-600 bg-gray-100 form-input"
              placeholder="example@gmail.com"
              required
            />
          </label>
          <label className="block mt-4">
            <span className="font-bold text-namari">お問い合わせ内容</span>
            <textarea
              name="entry.1780360931"
              className="block w-full mt-4 placeholder-gray-600 bg-gray-100 form-textarea"
              rows="5"
              placeholder="MITは素晴らしい"
              required
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              name="button"
              className="p-4 px-4 py-2 mt-4 font-semibold text-gray-800 transition-all bg-gray-100 border border-gray-400 rounded shadow hover:bg-gray-300 transition-300"
              value="送信"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
