'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({
  icon = '📭',
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-dark-600 dark:text-dark-400 mb-6 max-w-sm">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </motion.div>
  );
}
