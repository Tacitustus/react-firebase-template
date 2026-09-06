
import { Link } from 'react-router-dom';
import { Layout } from 'lucide-react';
import { Button } from '@/components/atoms/Button';

/**
 * @description ヘッダーコンポーネント
 * @returns {React.ReactElement} ヘッダー要素
 * @example
 * <Header />
 */
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Layout className="h-6 w-6 text-blue-600 dark:text-blue-500" />
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            App Template
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            ホーム
          </Link>
          <Link to="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            概要
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            ログイン
          </Button>
          <Button variant="primary" size="sm">
            はじめる
          </Button>
        </div>
      </div>
    </header>
  );
};
