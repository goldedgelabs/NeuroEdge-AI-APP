'use client';
import React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Icon = React.forwardRef<HTMLElement, IconProps>(function Icon(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Icon" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Icon;
