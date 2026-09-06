import React from 'react';
import { cn } from '@/utils/cn';

/**
 * @description Inputコンポーネントのプロパティ
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** エラー状態の有無 */
  error?: boolean;
}

/**
 * @description 汎用的なテキスト入力コンポーネント
 * @param {InputProps} props - 入力フィールドのプロパティ
 * @returns {React.ReactElement} 入力要素
 * @example
 * <Input placeholder="検索..." onChange={(e) => console.log(e.target.value)} />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-blue-500',
          error && 'border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
