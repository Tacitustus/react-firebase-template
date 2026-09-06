import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

/**
 * @description SearchBarコンポーネントのプロパティ
 */
export interface SearchBarProps {
  /** 検索実行時のコールバック関数 */
  onSearch: (query: string) => void;
  /** プレースホルダーテキスト */
  placeholder?: string;
  /** 追加のクラス名 */
  className?: string;
}

/**
 * @description 検索バーコンポーネント（InputとButtonの組み合わせ）
 * @param {SearchBarProps} props - 検索バーのプロパティ
 * @returns {React.ReactElement} 検索バー要素
 * @example
 * <SearchBar onSearch={(q) => console.log(q)} placeholder="キーワードを入力..." />
 */
export const SearchBar = ({ onSearch, placeholder = '検索...', className }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-full max-w-sm items-center space-x-2 ${className || ''}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" variant="primary" size="md">
        <Search className="mr-2 h-4 w-4" />
        検索
      </Button>
    </form>
  );
};
