'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  initials?: string;
  verified?: boolean;
}

export function Avatar({
  className,
  size = 'md',
  initials,
  verified = false,
  src,
  alt = 'Avatar',
  ...props
}: AvatarProps) {
  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-16 w-16 text-xl',
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn(
            'rounded-full object-cover',
            sizeClasses[size],
            className
          )}
          {...props}
        />
      ) : (
        <div
          className={cn(
            'rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-semibold text-white',
            sizeClasses[size],
            className
          )}
        >
          {initials}
        </div>
      )}
      {verified && (
        <div className="absolute -bottom-0.5 -right-0.5 bg-brand-500 rounded-full p-0.5 border-2 border-white dark:border-dark-800">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-2.77 3.066 3.066 0 00-3.58 3.03A3.066 3.066 0 006.267 3.455zm9.8 10.54a2.44 2.44 0 01-4.883-1.308c0 1.102.798 2.01 1.838 2.414.037.03.074.06.113.088a2.44 2.44 0 003.932-2.194zm4.334-8.86a2.44 2.44 0 00-3.933 2.196c.04-.03.076-.06.113-.088 1.04-.404 1.838-1.312 1.838-2.414 0 .64-.26 1.22-.683 1.644zm1.562 5.185c.037-.03.074-.06.112-.088 1.04-.404 1.838-1.312 1.838-2.414a2.44 2.44 0 00-3.933 2.196z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
}
