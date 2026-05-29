'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingProps {
  fullscreen?: boolean;
  message?: string;
}

export function Loading({ fullscreen = false, message }: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="h-8 w-8 rounded-full border-2 border-dark-300 border-t-brand-500 dark:border-dark-600 dark:border-t-brand-400"
      />
      {message && (
        <p className="text-sm text-dark-600 dark:text-dark-400">{message}</p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm z-50">
        {content}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-8">{content}</div>;
}
