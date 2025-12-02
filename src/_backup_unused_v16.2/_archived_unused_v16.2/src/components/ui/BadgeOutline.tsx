'use client';
import React from 'react';

export interface BadgeOutlineProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const BadgeOutline = React.forwardRef<HTMLElement, BadgeOutlineProps>(function BadgeOutline(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="BadgeOutline" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default BadgeOutline;
