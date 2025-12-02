'use client';
import React from 'react';

export interface BadgeCountProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const BadgeCount = React.forwardRef<HTMLElement, BadgeCountProps>(function BadgeCount(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="BadgeCount" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default BadgeCount;
