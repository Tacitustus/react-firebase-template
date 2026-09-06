
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/organisms/Header';

/**
 * @description アプリケーションのデフォルトレイアウト（ヘッダー＋メインコンテンツ＋フッター）
 * @returns {React.ReactElement} レイアウト要素
 * @example
 * <DefaultLayout />
 */
export const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Outlet で子ルートのコンポーネントをレンダリングする */}
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        &copy; {new Date().getFullYear()} React Firebase Template. All rights reserved.
      </footer>
    </div>
  );
};
