'use client';
import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Badge = React.forwardRef<HTMLElement, BadgeProps>(function Badge(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Badge" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Badge;
