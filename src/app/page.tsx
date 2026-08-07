import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

const CATEGORIES = [
  { key: 'mansion', label: 'マンション投資', icon: '🏢', desc: '区分・一棟マンション投資', color: 'from-blue-500 to-indigo-600' },
  { key: 'reit', label: 'REIT投資', icon: '📊', desc: '少額から始める不動産投資', color: 'from-teal-500 to-cyan-600' },
  { key: 'land', label: '土地・戸建て', icon: '🏠', desc: '土地活用・戸建て投資', color: 'from-emerald-500 to-green-600' },
  { key: 'beginner', label: '投資初心者', icon: '🌱', desc: 'ゼロから始める不動産投資', color: 'from-orange-500 to-amber-500' },
]

export default function Home() {
  const articles = getAllArticles()

  return (
    <div>
      <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            不動産投資で、<br className="md:hidden" />安定した副収入を作ろう。
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            マンション投資・REIT・土地活用の比較情報を完全網羅。<br className="hidden md:block" />
            初心者でもわかる不動産投資の始め方を解説します。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className={`bg-gradient-to-br ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-blue-700 rounded-full"></span>
          最新記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
