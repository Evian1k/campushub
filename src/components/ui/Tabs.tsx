'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface TabsProps {
  items: Array<{ label: string; value: string; content: React.ReactNode }>;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({ items, defaultValue, onValueChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.value);

  const handleChange = (value: string) => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-dark-200 dark:border-dark-700">
        {items.map((item) => (
          <button
            key={item.value}
            onClick={() => handleChange(item.value)}
            className={cn(
              'px-4 py-3 font-medium border-b-2 transition-colors',
              activeTab === item.value
                ? 'border-brand-500 text-brand-500'
                : 'border-transparent text-dark-600 dark:text-dark-400 hover:text-dark-900 dark:hover:text-white'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {items.find((item) => item.value === activeTab)?.content}
      </div>
    </div>
  );
}
