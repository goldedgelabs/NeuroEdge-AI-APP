'use client';
import React from 'react';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AspectRatio = React.forwardRef<HTMLElement, AspectRatioProps>(function AspectRatio(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="AspectRatio" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default AspectRatio;
