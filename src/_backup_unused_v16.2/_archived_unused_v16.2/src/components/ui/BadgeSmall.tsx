'use client';
import React from 'react';

export interface BadgeSmallProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const BadgeSmall = React.forwardRef<HTMLElement, BadgeSmallProps>(function BadgeSmall(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="BadgeSmall" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default BadgeSmall;
