import React from 'react';
import { cn } from '@/utils/cn';

/**
 * @description Buttonコンポーネントのプロパティ
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンの見た目 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** ボタンのサイズ */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * @description 汎用的なボタンコンポーネント
 * @param {ButtonProps} props - ボタンのプロパティ
 * @returns {React.ReactElement} ボタン要素
 * @example
 * <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
 *   クリック
 * </Button>
 */
export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  // バリアントに基づくスタイル定義
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    outline: 'border border-slate-300 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800',
    ghost: 'bg-transparent hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800',
  };

  // サイズに基づくスタイル定義
  const sizeStyles = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2 text-sm',
    lg: 'h-12 px-8 text-base',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
