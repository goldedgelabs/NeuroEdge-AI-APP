'use client';
import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Skeleton = React.forwardRef<HTMLElement, SkeletonProps>(function Skeleton(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Skeleton" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Skeleton;
