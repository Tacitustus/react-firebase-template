import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @description tailwind-merge と clsx を組み合わせてクラス名を最適化・結合するユーティリティ
 * @param {...ClassValue[]} inputs - 結合したいクラス名や条件式の配列
 * @returns {string} 最適化されたクラス名文字列
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
