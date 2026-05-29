'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({ className, hoverable = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-dark-200 bg-white p-4 dark:border-dark-700 dark:bg-dark-800',
        'shadow-soft transition-all',
        hoverable && 'hover:shadow-soft-lg cursor-pointer',
        className
      )}
      {...props}
    />
  );
}
