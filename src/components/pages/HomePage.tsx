
import { Sparkles, Zap, Shield, Code } from 'lucide-react';
import { SearchBar } from '@/components/molecules/SearchBar';

/**
 * @description ホームページコンポーネント（ウェルカムページ）
 * @returns {React.ReactElement} ホームページ要素
 * @example
 * <HomePage />
 */
export const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
      <div className="relative w-full max-w-4xl mx-auto py-24">
        {/* 装飾的な背景グラデーション */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-slate-50 dark:from-blue-950 dark:via-slate-900 dark:to-slate-900 opacity-70"></div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Next Generation <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Web Development
          </span>
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          React, Vite, TailwindCSS, そして Firebase で構築する
          最新のWebアプリケーションテンプレート。
          AIエージェントと共に、最速でプロダクトを立ち上げよう。
        </p>

        <div className="flex justify-center mb-16">
          <SearchBar onSearch={(q) => alert(`「${q}」で検索しました`)} placeholder="機能やドキュメントを検索..." />
        </div>

        {/* グラスモーフィズムカードのグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
          {[
            { title: '高速なビルド', icon: Zap, desc: 'Vite による極めて高速な HMR とビルドプロセス。' },
            { title: 'モダンなUI', icon: Sparkles, desc: 'TailwindCSS で実現する美しいスタイリングとアニメーション。' },
            { title: '安全な状態管理', icon: Shield, desc: 'Zustand を用いたシンプルかつ型安全な状態管理。' },
            { title: '型安全性', icon: Code, desc: 'TypeScript strict モードによる堅牢なコード基盤。' },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
